const { deleteQuery, getEventByIdQuery } = require('../../database/queries');

const deleteEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows } = await getEventByIdQuery(id);
    if (!rows.length) {
      return res.status(400).json({ status: 400, message: 'Event Doesn\'t Exist' });
    }
    await deleteQuery(id);
    return res.json({
      status: 200,
      message: 'Event Deleted Successfully',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = deleteEvent;

