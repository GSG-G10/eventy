const { getOrganizationByIdQuery } = require('../../database/queries');

const getOrganization = async (req, res, next) => {
  try {
    const { id: organizationId } = req.params;
    if (organizationId > 0) {
      const organization = await getOrganizationByIdQuery(organizationId);
      if (!organization) {
        return res.json({ message: 'No Data Found' });
      }
      return res.json(organization);
    }
    return res.status(400).json({ message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};

module.exports = getOrganization;
