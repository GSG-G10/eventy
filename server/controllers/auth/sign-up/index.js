const { signupValidation } = require('../../../utils/validation');
const { addNewOrganization } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { error } = await signupValidation.validateAsync(req.body);
    if (error) {
      next(error);
    }
    const {
      rows: [{ id }],
    } = await addNewOrganization(req.body);
    req.userId = id;
    next();
  } catch (error) {
    next(error);
  }
};
