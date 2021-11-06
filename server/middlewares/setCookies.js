const { signToken } = require('../utils/jwt');

const setCookies = async (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { organization } = req;
  try {
    const token = await signToken({ userId: organization.id }, SECRET_KEY);
    return res.cookie(
      'token',
      token,
      {
        httpOnly: true,
        secure: true,
      },
    )
      .status(201).json(
        { message: 'Logged In Successfully', organization },
      );
  } catch (err) {
    return next(err);
  }
};

module.exports = setCookies;
