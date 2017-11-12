/**
 * MongoDB Create document
 */
const TurnModel = require('./models/turn');

const createTurn = (turn, query, io, payload) => {
    TurnModel.create(turn)
        .then(() => {
            return TurnModel.findOne(query).sort({counter: -1});
        })
        .then((document) => {
            console.log('Document:', document);
            let createdPayload = payload;
            createdPayload.counter = document.counter;
            console.log('createdPayload:', createdPayload);
            io.sockets.emit('turn-created', createdPayload);
        });
};

module.exports = createTurn;
