const error404 = (req, res, next) => {
  res.status(404)
    .json({ message: 'Page Not Found!' });
};

module.exports = error404;
