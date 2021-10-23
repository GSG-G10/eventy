const { getAllOrgs } = require('../../database/queries');

const getOrgs = async (req, res, next) => {
  try {
    const { rows } = await getAllOrgs();
    if (rows.length) {
      res.json(rows);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getOrgs;
