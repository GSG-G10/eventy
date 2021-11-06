/* eslint-disable camelcase */
const { updateEventQuery, getEventByIdQuery } = require('../../database/queries');
const { updateEventValidation } = require('../../utils/validation');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;

    await updateEventValidation.validateAsync({ id, ...req.body });

    const event = await getEventByIdQuery(id);
    if (!event) {
      return res.status(400).json({ message: 'Event Doesnt Exist' });
    }
    const {
      name,
      description,
      price, attendance,
      start_date, expire_date, location,
      image, duration, details, organizer_id, category,
    } = req.body;

    if (event.organizer_id === Number(userId)) {
      const updatedEvent = await updateEventQuery(
        id, name,
        description,
        price, attendance,
        start_date, expire_date, location,
        image, duration, details, organizer_id, category,
      );
      return res.json(updatedEvent);
    }
    return res.status(403).json({ message: 'You dont have permission to update this event.' });
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
