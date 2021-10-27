const { getTopEventsQuery } = require('../../database/queries/events');
const getDate = require('../../utils/get-date');

const getTopEvent = async (req, res, next) => {
  try {
    const { type } = req.query;
    const { date } = getDate();

    if (type === 'top') {
      const events = await getTopEventsQuery(date);
      return res.json(events);
    }
    return res.status(400).json({ message: `No events for type ${type}` });
  } catch (err) {
    return next(err);
  }
};

module.exports = getTopEvent;
