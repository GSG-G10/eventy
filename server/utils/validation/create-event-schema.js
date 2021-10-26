const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  attendance: joi.number().required(),
  startDate: joi.date().required(),
  expireDate: joi.date().required(),
  location: joi.string().required(),
  image: joi.string(),
  duration: joi.string().required(),
  details: joi.string().required(),
  organizer: joi.number().required(),
  category: joi.string(),
});
