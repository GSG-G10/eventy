const { getOrganizationByIdQuery } = require('../../database/queries');

const getOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const { rows: data } = await getOrganizationByIdQuery(id);
      if (!data.length) {
        return res.json({ status: 204, message: 'No Data Found' });
      }
      return res.json({
        status: 200,
        message: 'Organization is imported successfully',
        data,
      });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};

module.exports = getOrganization;
