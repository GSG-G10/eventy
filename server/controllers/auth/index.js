const login = require('./login');
const signup = require('./sign-up');
const signout = require('./sign-out');
const getUserId = require('./login/get-user-id');

module.exports = {
  login,
  signup,
  signout,
  getUserId,
};
