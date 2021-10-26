const getDate = require('../../utils/get-date');
const { getEventsCategory } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { category } = req.query;
    const { date } = getDate();

    const events = await getEventsCategory(category, date);

    if (!events?.length > 0) {
      return res.status(400).json({ message: `No events found for category ${category}` });
    }

    return res.json(events);
  } catch (err) {
    return next(err);
  }
};
