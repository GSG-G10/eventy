const {
  getTopEventsQuery,
  getOnlineEventsQuery,
  getExlusiveEventsQuery,
} = require('../../database/queries/events');

const getDate = require('../../utils/get-date');

module.exports = async (req, res, next) => {
  try {
    const { type } = req.query;
    const { date } = getDate();

    let events;
    switch (type) {
      case 'top': {
        events = await getTopEventsQuery(date);
        break;
      }
      case 'online': {
        events = await getOnlineEventsQuery(date);
        break;
      }
      case 'exlusive': {
        events = await getExlusiveEventsQuery(date);
        break;
      }
      default: events = [];
    }
    return events.length > 0 ? res.json(events) : res.status(400).json({ message: 'No events with the specified type' });
  } catch (err) {
    return next(err);
  }
};
