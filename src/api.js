/**
 * WebSocket client
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToCurrentTurn(cb) {
    socket.on('turn', currentTurn => cb(null, currentTurn));
    socket.emit('subscribeToCurrentTurn', 100);
} 
export { subscribeToCurrentTurn }
