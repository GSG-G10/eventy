const { deleteQuery, getEventByIdQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id: eventId } = req.params;
    const { userId } = req;

    // check if the event exist
    const event = await getEventByIdQuery(eventId);
    if (!event) {
      return res.status(400).json({ status: 400, message: 'Event Doesn\'t Exist' });
    }

    // check if this is the owner of the event
    if (event.organizer_id === Number(userId)) {
      if (eventId > 0) {
        await deleteQuery(eventId);
        return res.json({ message: 'Event Deleted Successfully' });
      }
      return res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    return res.status(403).json({ message: 'Forbidden User' });
  } catch (err) {
    return next(err);
  }
};
