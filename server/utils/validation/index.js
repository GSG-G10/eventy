const loginSchema = require('./login');
const signupValidation = require('./signup-schema-validation');
const joinEventValidation = require('./join-event-validation');
const updateEventValidation = require('./update-event-validation');

module.exports = {
  loginSchema,
  signupValidation,
  joinEventValidation,
  updateEventValidation,
};
