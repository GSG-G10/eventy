const { joinEventValidation } = require('../../utils/validation');
const {
  addAttendant,
  getAttendance,
  addEventAttendance,
  getEventAttendant,
  getEventByIdQuery,
} = require('../../database/queries');

const sendEmail = require('../../utils/sendEmail');

const addAttendence = async (req, res, next) => {
  try {
    const { id: eventId } = req.params;
    const { email } = req.body;
    await joinEventValidation.validateAsync({ ...req.body, eventId });
    const { rows: eventInfo } = await getEventByIdQuery(eventId);
    // check if the user exists
    const existAttendant = await getAttendance(email);
    if (!existAttendant) {
      // if the user is new, store his data and send a reminder
      const newAttendant = await addAttendant(req.body);
      const attendantId = newAttendant.id;
      await addEventAttendance(attendantId, eventId);
      await sendEmail(eventInfo[0], newAttendant.email, next);
      return res.json({ message: 'Joined Event Successfuly' });
    }
    // if the user exists check if he is already joined
    const attendent = await getEventAttendant(existAttendant.id, eventId);
    if (attendent) {
      return res.json({ message: 'Already joined' });
    }
    // if the user exists and didn't join, add him and send him a reminder
    await addEventAttendance(existAttendant.id, eventId);
    await sendEmail(eventInfo[0], email);
    return res.json({ message: 'Joined Event Successfuly' });
  } catch (err) {
    if (err.details) { // validation error
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = addAttendence;
