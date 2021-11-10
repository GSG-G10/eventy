const { signupValidation } = require('../../../utils/validation');
const { uploadImage } = require('../../../utils/cloudinary');

const { addNewOrganization, checkAccount } = require('../../../database/queries');

module.exports = async (req, res, next) => {
  try {
    await signupValidation.validateAsync(req.body);
    const organization = await checkAccount(req.body.email);

    if (organization) {
      return res.status(403).json({ error: { message: 'Email is already exists' } });
    }
    req.body.image = await uploadImage(req.body.image);
    req.body.categories = JSON.stringify(req.body.categories);
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
