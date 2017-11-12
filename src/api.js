/**
 * WebSocket client
 * 
 * @author Lenin Meza <merolhack@gmail.com>
 */
import SocketIOClient from 'socket.io-client';

const options = {
    path: '/turns'
};
const socket = SocketIOClient('http://192.168.1.64:8000', options);

function getCurrentTurn(cb) {
    socket.emit('get-turn', {});
    socket.on('current-turn', (payload) => cb(payload));
}
function subscribeToCurrentTurn(cb) {
    socket.on('turn-created', (payload) => cb(null, payload));
}
export { getCurrentTurn, subscribeToCurrentTurn }
