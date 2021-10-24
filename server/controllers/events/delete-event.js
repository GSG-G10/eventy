const { deleteQuery, getEventByIdQuery } = require('../../database/queries');

const deleteEvent = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req;
  try {
    // check if the event exist
    const { rows } = await getEventByIdQuery(id);
    if (!rows.length) {
      return res.status(400).json({ status: 400, message: 'Event Doesn\'t Exist' });
    }
    // check if this is the owner of the event
    if (rows[0].organizer_id === Number(userId)) {
      await deleteQuery(id);
      return res.json({
        status: 200,
        message: 'Event Deleted Successfully',
      });
    }
    // eslint-disable-next-line no-throw-literal
    throw ({ message: 'Forbidden User', status: 403 });
  } catch (err) {
    return next(err);
  }
};

module.exports = deleteEvent;
