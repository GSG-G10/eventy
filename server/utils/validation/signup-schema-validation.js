const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  confirmPassword: joi.ref('password'),
  categories: joi.string().required(),
  photo: joi.string().required(),
  description: joi.string().required(),
});
