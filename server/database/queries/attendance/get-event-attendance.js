const connection = require('../../connection');

const getEventAttendant = async (attendantId, eventId) => {
  const { rows } = await connection
    .query(`
  SELECT *
  FROM event_attendance
  WHERE attendance_id = $1 AND event_id = $2
  `,
    [attendantId, eventId]);

  return rows[0];
};
module.exports = getEventAttendant;
