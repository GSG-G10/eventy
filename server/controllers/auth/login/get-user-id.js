const { verifyToken } = require('../../../utils/jwt');

const {
  env: { SECRET_KEY },
} = process;

module.exports = async (req, res, next) => {
  try {
    const {
      cookies: { token },
    } = req;

    if (token) {
      const value = await verifyToken(token, SECRET_KEY);
      res.json({ id: value.userId });
    } else {
      res.status(401).json({ message: 'You are not registred yet' });
    }
  } catch (error) {
    next(error);
  }
};
