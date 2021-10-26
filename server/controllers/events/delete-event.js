const { deleteQuery, getEventByIdQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id: eventId } = req.params;
    const { userId } = req;

    if (eventId > 0) {
      const event = await getEventByIdQuery(eventId);
      if (!event) {
        return res.status(400).json({ status: 400, message: 'Event Doesn\'t Exist' });
      }

      if (event.organizer_id === Number(userId)) {
        await deleteQuery(eventId);
        return res.json({ message: 'Event Deleted Successfully' });
      }

      return res.status(403).json({ message: 'You dont have permission to delete this event.' });
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
