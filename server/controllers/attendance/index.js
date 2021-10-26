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
    req.body.isSubscriber = Boolean(req.body.isSubscriber);
    await joinEventValidation.validateAsync({ ...req.body, eventId });
    // check if the user exists
    const { rows } = await getAttendance(req.body.email);
    if (!rows.length) {
      // if the user is new, store his data and send a reminder
      const rowsObj = await addAttendant(req.body);
      const attendantId = rowsObj.rows[0].id;
      await addEventAttendance(attendantId, eventId);
      const { rows: eventInfo } = await getEventByIdQuery(eventId);
      sendEmail(eventInfo[0], rowsObj.rows[0].email, next);
      return res.json({ message: 'Joined Event Successfuly' });
    }
    // if the user exists check if he is already joined
    const attendantId = rows[0].id;
    const attendent = await getEventAttendant(attendantId, eventId);
    if (attendent.rows.length > 0) {
      return res.json({ status: 200, message: 'Already joined' });
    }
    // if the user exists and didn't join, add him and send him a reminder
    await addEventAttendance(attendantId, eventId);
    const { rows: eventInfo } = await getEventByIdQuery(eventId);
    sendEmail(eventInfo[0], req.body.email, next);
    return res.json({ message: 'Joined Event Successfuly' });
  } catch (err) {
    if (err.details) { // validation error
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = addAttendence;
