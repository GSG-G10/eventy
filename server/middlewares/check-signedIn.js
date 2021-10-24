const { verify } = require('jsonwebtoken');

const {
  env: { SECRET_KEY },
} = process;

module.exports = async (req, res, next) => {
  try {
    const {
      cookies: { token },
    } = req;
    if (token) {
      const value = verify(token, SECRET_KEY);
      req.userId = value.userId;
      next();
    } else {
      res.status(403).json({ status: 403, message: 'You are not registred yet' });
    }
  } catch (err) {
    next(err);
  }
};
