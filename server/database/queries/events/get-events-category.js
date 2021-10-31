const connection = require('../../connection');

module.exports = async (category, date) => {
  const { rows } = await connection.query(`
    SELECT events.*, organization.name AS organizer
    FROM events INNER JOIN organization
    ON events.organizer_id = organization.id  
    WHERE events.category LIKE '%${category}%' AND expire_date >= $1 
    ORDER BY events.attendance DESC `,
  [date]);

  return rows;
};
