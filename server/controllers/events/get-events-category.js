const { getEventsCategory } = require('../../database/queries');
const { getDate } = require('../../utils');

async function getEventsByCategory(req, res, next) {
  const { category } = req.query;
  const { date, time } = getDate();
  try {
    const { rows } = await getEventsCategory(category, date, time);
    return res.json({ message: 'Events imported successfully', data: rows });
  } catch (err) {
    return next(err);
  }
}

module.exports = getEventsByCategory;
