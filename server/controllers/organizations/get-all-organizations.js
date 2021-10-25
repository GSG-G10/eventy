const { getAllOrgs } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const {
      rows,
    } = await getAllOrgs();
    if (!rows.length) {
      return res.json({ status: 204, message: 'No Data Found' });
    }
    return res.json({
      status: 200,
      message: 'Organizations Imported Successfully',
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};
