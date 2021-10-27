const { createEventQuery } = require('../../database/queries/events');
const { createEventValidation } = require('../../utils/validation');

const createEvent = async (req, res, next) => {
  try {
    const { userId } = req;
    await createEventValidation.validateAsync(req.body);
    const creatEvent = await createEventQuery(userId, req.body);
    return res.status(201).json(creatEvent);
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = createEvent;
