const { getOrganizationEvents } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const id = Number(req.query.organization);
    if (id > 0) {
      const {
        rows,
      } = await getOrganizationEvents(id);

      return res.json({
        status: 200,
        message: 'Events imported successfully',
        data: rows,
      });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
