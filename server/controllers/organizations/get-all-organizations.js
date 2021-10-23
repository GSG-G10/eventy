const { getAllOrgs } = require('../../database/queries');

const getOrgs = async (req, res, next) => {
  try {
    const { rows } = await getAllOrgs();
    return res.json({
      status: 200,
      message: 'Organizations Imported Successfully',
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getOrgs;
