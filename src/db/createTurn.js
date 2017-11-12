/**
 * MongoDB Create document
 */
const TurnModel = require('./models/turn');

const createTurn = (turn, query, client, payload) => {
    TurnModel.create(turn)
        .then(() => {
            return TurnModel.findOne(query).sort({counter: -1});
        })
        .then((document) => {
            console.log('Document:', document);
            let createdPayload = payload;
            createdPayload.counter = latestTurn;
            console.log('createdPayload:', createdPayload);
            client.emit('turn-created', createdPayload);
        });
};

module.exports = createTurn;
