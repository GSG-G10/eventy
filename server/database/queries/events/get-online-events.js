const connection = require('../../connection');

module.exports = async (date) => {
  const { rows } = await
  connection.query(`
   SELECT events.*, organization.name AS organizer
   FROM events INNER JOIN organization
   ON events.organizer_id = organization.id 
   WHERE lower(events.location) = 'online' AND events.expire_date >= $1 
   ORDER BY events.expire_date DESC; 
    `,
  [date]);
  return rows;
};
