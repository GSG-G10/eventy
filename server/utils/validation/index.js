const loginSchema = require('./login');
const signupValidation = require('./signup-schema-validation');
const joinEventValidation = require('./join-event-validation');
const createEventValidation = require('./create-event-schema');

module.exports = {
  loginSchema,
  signupValidation,
  joinEventValidation,
  createEventValidation,
};
