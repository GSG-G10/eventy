const connection = require('../../connection');

const addEventAttendance = (attendantId, eventId) => connection
  .query('INSERT INTO event_attendance (attendance_id, event_id) VALUES ($1, $2)', [attendantId, eventId]);

module.exports = addEventAttendance;
