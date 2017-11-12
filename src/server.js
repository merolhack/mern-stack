/**
 * WebSocket server
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */
// General Dependencies
const io = require('socket.io')();
const ip = require('ip');
const db = require('./db/connection');
const TurnModel = require('./db/models/turn');
const createTurn = require('./db/createTurn');

const handleError = function(error) {
    console.log('error:', error);
};
/**
 * SocketIO
 */
// Emitting events to the client
io.on('connection', (client) => {
    client.on('create-turn', (payload) => {
        console.log('create-turn | payload:', JSON.stringify(payload));
        // Get the latest turn of that group in the current day
        let latestTurn = 1;
        const start = new Date();
        start.setHours(0,0,0,0);
        const end = new Date();
        end.setHours(23,59,59,999);
        const query = {
            'group': payload.groupName,
            'createdAt': {$gte: start, $lt: end}
        };
        const latest = TurnModel.findOne(query).sort({counter: -1});
        latest.exec((err, documentFound) => {
            console.log('err:', err, 'turn:', documentFound);
            if (err) return handleError(err);
            if (!documentFound) {
                console.log('It is the first turn!');
            } else {
                latestTurn = documentFound.counter + 1;
                console.log('Found turn:', documentFound.counter);
            }
            // Create the turn
            const turn = {
                counter: latestTurn,
                group: payload.groupName,
            };
            console.log('Turn that will be created:', turn);
            createTurn(turn, query, client, payload);
        });
    });
});
// Listening clients
const address = ip.address();
const port = 3000;
io.listen(port);
console.log(`Listening on ${address}:${port}`);
