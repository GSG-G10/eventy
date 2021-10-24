const { signupValidation } = require('../../../utils/validation');
const { addNewOrganization } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const {
      rows: [{ id }],
    } = await addNewOrganization(req.body);
    req.userId = id;
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
