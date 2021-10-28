const { signupValidation } = require('../../../utils/validation');
const { addNewOrganization, checkAccount } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const organization = await checkAccount(req.body.email);

    if (organization) {
      return res.status(403).json({ message: 'Email is already exists' });
    }

    const newOrganizationId = await addNewOrganization(req.body);
    req.userId = newOrganizationId;
    return next();
  } catch (error) {
    if (error.details) {
      error.status = 400;
    }
    return next(error);
  }
};
