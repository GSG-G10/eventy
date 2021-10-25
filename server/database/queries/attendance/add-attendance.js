const connection = require('../../connection');

const addAttendant = ({
  name, email, age, gender, isSubscriber, phone,
}) => connection
  .query(`INSERT INTO attendance (name, email, age, gender, isSubscriber, phone)
  VALUES($1, $2, $3, $4, $5, $6) RETURNING id, email `, [name, email, age, gender, isSubscriber, phone]);

module.exports = addAttendant;
