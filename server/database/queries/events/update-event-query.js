const connection = require('../../connection');

module.exports = (
  id,
  {
    name,
    description,
    price, attendance,
    startDate, expireDate, location,
    image, duration, details, organizerId, category,
  },
) => connection
  .query(
    `
    UPDATE events
    SET name=$2,
        description=$3,
        price=$4, 
        attendance=$5,
        start_date=$6,
        expire_date=$7,
        location=$8,
        image=$9,
        duration=$10,
        details=$11,
        organizer_id=$12,
        category=$13
    WHERE id=$1 ;`,
    [
      id, name, description, price, attendance, startDate, expireDate,
      location, image, duration, details, organizerId, category,
    ],
  );
