const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  confirmPassword: joi.ref('password'),
  categories: joi.array().required(),
  photo: joi.any().required(),
  description: joi.string().required(),
});
