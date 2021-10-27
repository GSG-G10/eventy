const { getEventByIdQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id: eventId } = req.params;
    if (eventId > 0) {
      const event = await getEventByIdQuery(eventId);
      if (!event) {
        return res.json({ message: 'No Event Found' });
      }
      return res.json(event);
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
