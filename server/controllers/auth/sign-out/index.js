module.exports = (req, res, next) => {
  try {
    res.clearCookie('token').json({ msg: 'Signed out succefully' });
  } catch (err) {
    next(err);
  }
};
