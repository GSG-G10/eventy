const { compare } = require('bcryptjs');

module.exports = (password, hashedPassword, callback) => {
  compare(password, hashedPassword, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
