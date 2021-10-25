const connection = require('../../connection');

const createEventQuery = (userId, {
  name,
  description,
  price, attendance,
  startDate, expireDate,
  location, image, duration, details, category,
}) => connection
  .query(`INSERT INTO events (
    organizer_id,
    name,
    description,
    price,
    attendance,
    start_date,
    expire_date,
    location,
    image,
    duration,
    details,
    category) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`,
  [userId, name, description, price, attendance, startDate, expireDate,
    location, image, duration, details, category]);

module.exports = createEventQuery;
