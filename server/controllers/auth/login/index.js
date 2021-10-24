/* eslint-disable no-throw-literal */
const { comparePassword } = require('../../../utils/b-crypt');

const { checkAccount } = require('../../../database/queries');
const { loginSchema } = require('../../../utils/validation');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await loginSchema.validateAsync(req.body);
    const { rows } = await checkAccount(email);
    if (!rows.length) {
      return res.status(401).json({ message: 'invalid email or password' });
    }
    const compared = await comparePassword(password, rows[0].password);
    if (!compared) {
      return res.status(401).json({ message: 'invalid email or password' });
    }
    req.userId = rows[0].id;
    return next();
  } catch (err) {
    err.status = 403; // for validation error
    return next(err);
  }
};

module.exports = login;
