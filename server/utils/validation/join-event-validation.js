const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  age: joi.number().max(100).required(),
  gender: joi.string().required(),
  phone: joi.string().max(20).pattern(/^[0-9]+$/).required(),
});
