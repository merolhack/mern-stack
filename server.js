/**
 * WebSocket server
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */
// Dependencies
const io = require('socket.io')();
const mongoose = require('mongoose');

// Connect to the database
const config = {
    uri: 'mongodb://localhost',
    db: 'turns'
};
mongoose.createConnection(`${config.uri}/${config.db}`, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    } else {
        console.log('Connected to database: ' + config.db);
    }
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('openUri', () => {
    console.log('Conected to MongoDB!');
});

// Emitting events to the client
io.on('connection', (client) => {
    client.on('subscribeToCurrentTurn', (payload) => {
        console.log('client is subscribing to turn with interval ', payload);
        setInterval(() => {
            client.emit('turn', new Date());
        }, payload);
    });
});

// Listening clients
const port = 8000;
io.listen(port);
console.log('listening on port: ', port);
