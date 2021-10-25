const { getEventsCategory } = require('../../database/queries');
const getDate = require('../../utils/get-date');

async function getEventsByCategory(req, res, next) {
  try {
    const { category } = req.query;
    const { date, time } = getDate();
    const { rows } = await getEventsCategory(category, date);
    if (!rows.length) {
      return res.json({ status: 204, message: 'No Data Found' });
    }
    const filteredData = rows.filter((ele) => ele.duration >= time);
    return res.json({
      status: 200,
      message: 'Events imported successfully',
      data: filteredData,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = getEventsByCategory;
