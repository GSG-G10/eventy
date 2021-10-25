const { updateEventQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    // await schema validation here
    await updateEventQuery(id, req.body);
    return res
      .json({
        status: 200,
        message: 'Event updated successfully',
      });
  } catch (err) {
    return next(err);
  }
};
