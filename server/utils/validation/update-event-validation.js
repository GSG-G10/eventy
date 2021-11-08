const joi = require('joi');

module.exports = joi.object({
  id: joi.number().positive().required(),
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  attendance: joi.number().required(),
  start_date: joi.date().required(),
  expire_date: joi.date().required(),
  location: joi.string().required(),
  organizer: joi.string().required(),
  image: joi.string(),
  duration: joi.string().required(),
  details: joi.string().required(),
  organizer_id: joi.number().positive().required(),
  category: joi.string(),
});
