const { getOrganizationEvents } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const organizationId = Number(req.query.organization);

    if (organizationId > 0) {
      const events = await getOrganizationEvents(organizationId);
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
