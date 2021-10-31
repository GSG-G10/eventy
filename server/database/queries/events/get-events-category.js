const connection = require('../../connection');

module.exports = async (category, date) => {
  const { rows } = await connection.query(`
    SELECT events.*, organization.name
    FROM events INNER JOIN organization
    ON events.organizer_id = organization.id  
    WHERE events.category LIKE '%$1%' AND expire_date >= $2 
    ORDER BY events.attendance DESC `,
  [category, date]);

  return rows;
};
