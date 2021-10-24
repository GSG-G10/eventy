const { getOrganizationByIdQuery } = require('../../database/queries');

const getOrganization = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { rows: data } = await getOrganizationByIdQuery(id);
    return res.json({
      status: 200,
      message: 'Organization is imported successfully',
      data,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getOrganization;
