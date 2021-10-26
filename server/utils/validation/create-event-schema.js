const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().positive().required(),
  attendance: joi.number().positive().required(),
  startDate: joi.date().required(),
  expireDate: joi.date().required(),
  location: joi.string().required(),
  image: joi.string(),
  duration: joi.string().required(),
  details: joi.string().required(),
  organizer_id: joi.number().positive().required(),
  category: joi.string(),
});
