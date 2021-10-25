const { getTopEventsQuery } = require('../../database/queries/events');
const getDate = require('../../utils/get-date');

const getTopEvent = async (req, res, next) => {
  try {
    const { type } = req.query;
    const { date } = getDate();
    if (type === 'top') {
      const { rows } = await getTopEventsQuery(date);
      return res.json({
        status: 200,
        message: 'Events imported successfully',
        data: rows,
      });
    }
    return res.status(404).json({ message: 'Such type is not found!' });
  } catch (err) {
    return next(err);
  }
};

module.exports = getTopEvent;
