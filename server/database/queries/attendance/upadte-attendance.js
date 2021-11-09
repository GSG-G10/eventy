const connection = require('../../connection');

module.exports = (eventId) => (
  connection
    .query('UPDATE events SET attendance = attendance+1 WHERE id=$1;', [eventId])
);
