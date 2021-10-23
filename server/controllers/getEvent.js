const {getEventByIdQuery} = require('../database/queries');

const getEvent = async (req, res, next) => {
   const { id } = req.params;
   try{
       const {rows: events} = await getEventByIdQuery(id);
       res.status(200).json({events});
   }
   catch (err) {
       next(err);
   }
};

module.exports = getEvent;