const { getAllOrgs } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const organizations = await getAllOrgs();
    if (!organizations.length > 0) {
      return res.json({ message: 'No Organizations Found' });
    }
    return res.json(organizations);
  } catch (err) {
    return next(err);
  }
};
