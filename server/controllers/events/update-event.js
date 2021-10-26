const { updateEventQuery, getEventByIdQuery } = require('../../database/queries');
const { updateEventValidation } = require('../../utils/validation');

module.exports = async (req, res, next) => {
  try {
    const { id: eventId } = req.params;
    const { userId } = req;

    await updateEventValidation.validateAsync({ eventId, ...req.body });

    const event = await getEventByIdQuery(eventId);
    if (!event) {
      return res.status(400).json({ message: 'Event Doesnt Exist' });
    }

    if (event.organizer_id === Number(userId)) {
      const updatedEvent = await updateEventQuery(eventId, req.body);
      return res.json(updatedEvent);
    }
    return res.status(400).json({ message: 'You dont have permission to update this event.' });
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
