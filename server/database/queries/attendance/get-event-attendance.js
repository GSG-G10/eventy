const connection = require('../../connection');

const getEventAttendant = (attendantId, eventId) => connection
  .query('SELECT * FROM event_attendance WHERE attendance_id = $1 AND event_id = $2', [attendantId, eventId]);

module.exports = getEventAttendant;
