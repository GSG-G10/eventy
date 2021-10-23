const moment = require('moment');

const getDate = () => {
  const dateTime = moment().format().split('T');
  const date = dateTime[0];
  const time = dateTime[1].split('+')[0];
  return { date, time };
};

module.exports = getDate;
