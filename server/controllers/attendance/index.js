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
    const { id } = req.params;
    await joinEventValidation.validateAsync(req.body);
    if (id > 0) {
      const { rows } = await getAttendance(req.body.email);
      if (!rows.length) {
        const rowsObj = await addAttendant(req.body);
        const attendantId = rowsObj.rows[0].id;
        await addEventAttendance(attendantId, id);
        const { rows: eventInfo } = await getEventByIdQuery(id);
        sendEmail(eventInfo[0], rowsObj.rows[0].email, next);
        return res.json({ message: 'Joined Event Successfuly' });
      }
      const attendantId = rows[0].id;
      const attendent = await getEventAttendant(attendantId, id);
      if (attendent.rows.length > 0) {
        return res.json({ status: 200, message: 'Already joined' });
      }
      await addEventAttendance(attendantId, id);
      const { rows: eventInfo } = await getEventByIdQuery(id);
      sendEmail(eventInfo[0], req.body.email, next);
      return res.json({ message: 'Joined Event Successfuly' });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = addAttendence;
