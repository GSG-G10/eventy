const { updateEventQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      // await schema validation here
      await updateEventQuery(id, req.body);
      return res
        .json({
          status: 200,
          message: 'Event updated successfully',
        });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
