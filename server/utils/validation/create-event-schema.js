const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  startDate: joi.date().required(),
  expireDate: joi.date().required(),
  location: joi.string().required(),
  image: joi.string(),
  age: joi.number().required(),
  duration: joi.string().required(),
  details: joi.string().required(),
  category: joi.array().required(),
});
