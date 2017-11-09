/**
 * WebSocket server
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */
const io = require('socket.io')();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/turns');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
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
