const { getEventByIdQuery } = require('../../database/queries');

const getEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows: data } = await getEventByIdQuery(id);
    return res.json({
      status: 200,
      message: 'Event is imported successfully',
      data,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getEvent;
