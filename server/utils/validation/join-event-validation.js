const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  age: joi.integer().max(3).required(),
  gender: joi.string().required(),
  phone: joi.string().pattern(/^[0-9]+$/).required(),
});
