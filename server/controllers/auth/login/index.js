const { comparePassword } = require('../../../utils/b-crypt');
const { checkAccount } = require('../../../database/queries');
const { loginSchema } = require('../../../utils/validation');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync(req.body);
    const organization = await checkAccount(email);
    const compared = await comparePassword(password, organization.password);

    if (!compared || !organization) {
      return res.status(401).json({ message: 'invalid email or password' });
    }
    req.userId = organization.id;
    return next();
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};
