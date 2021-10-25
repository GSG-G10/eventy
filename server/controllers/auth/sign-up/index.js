const { signupValidation } = require('../../../utils/validation');
const { addNewOrganization, checkAccount } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const {
      rows,
    } = await checkAccount(req.body.email);
    if (rows.length > 0) {
      return res
        .status(403)
        .json({
          status: 403,
          message: 'Email is already exists',
        });
    }
    const {
      rows: [{ id }],
    } = await addNewOrganization(req.body);
    req.userId = id;
    return next();
  } catch (error) {
    if (error.details) { // for validation error
      error.status = 400;
      return next(error);
    }
    return next(error);
  }
};
