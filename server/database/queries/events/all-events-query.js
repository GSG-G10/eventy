const connection = require('../../connection');

module.exports = async (date) => {
  const { rows } = await connection
    .query(`
    SELECT events.*, organization.name
    FROM events INNER JOIN organization
    ON events.organizer_id = organization.id 
    WHERE events.expire_date >= $1
    ORDER BY events.attendance DESC;`,
    [date]);

  return rows;
};
