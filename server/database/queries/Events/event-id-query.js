const connection = require('../../connection');

const getEventByIdQuery = (eventId) => connection.query(
    'SELECT * FROM events WHERE id=$1', [eventId]
);

module.exports = getEventByIdQuery;