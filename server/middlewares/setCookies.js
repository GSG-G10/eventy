const { sign } = require('jsonwebtoken');

const setCookies = (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { userId } = req;
  try {
    const token = sign({ userId }, SECRET_KEY);
    return res.cookie(
      'token',
      token,
      {
        httpOnly: true,
        secure: true,
      },
    )
      .json(
        { message: 'Logged In Successfully' },
      );
  } catch (err) {
    return next(err);
  }
};

module.exports = setCookies;
