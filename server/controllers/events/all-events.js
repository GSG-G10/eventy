const { getAllEvents } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      rows: [events],
    } = await getAllEvents();
    return res.json({
      message: 'Events imported successfully',
      data: { events },
    });
  } catch (error) {
    return next(error);
  }
};
