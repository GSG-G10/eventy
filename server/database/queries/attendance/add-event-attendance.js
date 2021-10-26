const connection = require('../../connection');

const addEventAttendance = async (attendantId, eventId) => {
  const { rows } = await connection
    .query(`
  INSERT INTO
  event_attendance (attendance_id, event_id) 
  VALUES ($1, $2)
  RETURNING *`,
    [attendantId, eventId]);
  return rows[0];
};
module.exports = addEventAttendance;
