const { signupValidation } = require('../../../utils/validation');
const { uploadImage } = require('../../../utils/cloudinary');

const { addNewOrganization, checkAccount } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const organization = await checkAccount(req.body.email);
    req.body.image = await uploadImage(req.body.image);

    if (organization) {
      return res.status(403).json({ error: { message: 'Email is already exists' } });
    }

    const newOrganization = await addNewOrganization(req.body);
    req.organization = newOrganization;
    return next();
  } catch (error) {
    if (error.details) {
      error.status = 400;
    }
    return next(error);
  }
};
