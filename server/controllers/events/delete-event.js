const { deleteQuery, getEventByIdQuery } = require('../../database/queries');

const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    // check if the event exist
    const { rows } = await getEventByIdQuery(id);
    if (!rows.length) {
      return res.status(400).json({ status: 400, message: 'Event Doesn\'t Exist' });
    }
    // check if this is the owner of the event
    if (rows[0].organizer_id === Number(userId)) {
      if (id > 0) {
        await deleteQuery(id);
        return res.json({
          status: 200,
          message: 'Event Deleted Successfully',
        });
      }
      return res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    return res.status(403).json({ message: 'Forbidden User' });
  } catch (err) {
    return next(err);
  }
};

module.exports = deleteEvent;
