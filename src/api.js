/**
 * WebSocket client
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToCurrentTurn(cb) {
    socket.on('turn-created', currentTurn => cb(null, currentTurn));
} 
export { subscribeToCurrentTurn }
