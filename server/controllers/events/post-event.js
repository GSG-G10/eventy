const { createEventQuery } = require('../../database/queries/events');
const { createEventValidation } = require('../../utils/validation');

const createEvent = async (req, res, next) => {
  try {
    const { userId } = req;
    await createEventValidation.validateAsync(req.body);
    await createEventQuery(userId, req.body);
    return res.status(201).json(req.body);
  } catch (err) {
    return next(err);
  }
};

module.exports = createEvent;
