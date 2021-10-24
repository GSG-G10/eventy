const { sign } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { userId } = req;

  sign(
    { userId }, SECRET_KEY, (err, token) => {
      if (err) {
        next(err);
      } else {
        res.cookie(
          'access_token',
          token,
          {
            httpOnly: true,
            secure: true,
          },
        )
          .json(
            { message: 'Logged In Successfully' },
          );
      }
    },
  );
};
