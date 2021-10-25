const { signupValidation } = require('../../../utils/validation');
const { addNewOrganization, checkAccount } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const {
      rows,
    } = await checkAccount(req.body.email);
    if (rows.length > 0) {
      res
        .status(403)
        .json({
          status: 403,
          message: 'Email is already exists',
        });
    } else {
      const {
        rows: [{ id }],
      } = await addNewOrganization(req.body);
      req.userId = id;
      next();
    }
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
