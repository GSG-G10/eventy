const nodemailer = require('nodemailer');

const sendEmail = async ({
  // eslint-disable-next-line camelcase
  name, description, price, start_date, expire_date, location, duration, details, category,
}, userEmail) => {
  // configuration data
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ORG_EMAIL,
      pass: process.env.ORG_EMAIL_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(config);
  // the message that will be sent to user
  const message = {
    from: process.env.ORG_EMAIL,
    to: userEmail,
    subject: `Invitation for ${name} event `,
    html: ` 
      <h3> You have been invited for ${name} event </h3>
      <h4> Event Information: </h4>
      <ul>
      <li> <strong>Event Name: </strong> ${name} </li>
      <li> <strong>Brief Description: </strong>${description} </li>
      <li> <strong>Ticket Price:</strong> ${price ? `${price}$` : 'Free'} </li>
      <li> <strong>Start Date:</strong> ${start_date.toString().split('00')[0]} </li>
      <li> <strong>Expire Date: </strong>${expire_date.toString().split('00')[0]} </li>
      <li>  <strong>Location:</strong> ${location} </li>
      <li>  <strong>Time:</strong> ${duration} </li>
      <li> <strong>Details:</strong> ${details} </li>
      <li> <strong> Category:</strong> ${category} </li>
       </ul>
    `,
  };
  return transporter.sendMail(message);
};

module.exports = sendEmail;
