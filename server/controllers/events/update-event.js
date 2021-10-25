const { updateEventQuery, getEventByIdQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id > 0) {
      const { userId } = req;
      const { rows } = await getEventByIdQuery(id);
      if (!rows.length) {
        return res.status(400).json({ status: 400, message: 'Event Doesnt Exist' });
      }
      if (rows[0].organizer_id === Number(userId)) {
      // await schema validation here
        await updateEventQuery(id, req.body);
        return res
          .json({
            status: 200,
            message: 'Event updated successfully',
          });
      }
      return res.status(403).json({ status: 403, message: 'unauthorized user' });
    }
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  } catch (err) {
    return next(err);
  }
};
