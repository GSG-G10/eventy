const { getEventByIdQuery } = require('../../database/queries');

const getEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const { rows: data } = await getEventByIdQuery(id);
      if (!data.length > 0) {
        return res.json({ status: 204, message: 'No Data Found' });
      }
      return res.json({
        status: 200,
        message: 'Event is imported successfully',
        data,
      });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};

module.exports = getEvent;
