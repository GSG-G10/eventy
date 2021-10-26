const { getOrganizationEvents } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const id = Number(req.query.organization);

    if (id > 0) {
      const events = await getOrganizationEvents(id);
      if (!events?.length > 0) {
        return res.json({ message: 'There is no events for this organization ' });
      }
      return res.json(events);
    }

    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
