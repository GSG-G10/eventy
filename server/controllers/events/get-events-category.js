const { getEventsCategory } = require('../../database/queries');
const getDate = require('../../utils/get-date');

async function getEventsByCategory(req, res, next) {
  const { category } = req.query;
  const { date, time } = getDate();
  try {
    const { rows } = await getEventsCategory(category, date, time);
    return res.json({
      status: 200,
      message: 'Events imported successfully',
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = getEventsByCategory;
