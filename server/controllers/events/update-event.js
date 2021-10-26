const { updateEventQuery, getEventByIdQuery } = require('../../database/queries');
const { updateEventValidation } = require('../../utils/validation');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    req.body.id = id;

    await updateEventValidation.validateAsync(req.body);

    const { rows } = await getEventByIdQuery(id);
    if (!rows.length) {
      return res.status(400).json({ status: 400, message: 'Event Doesnt Exist' });
    }

    if (rows[0].organizer_id === Number(userId)) {
      await updateEventQuery(id, req.body);
      return res
        .json({
          status: 200,
          message: 'Event updated successfully',
        });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
