const { compare } = require('bcryptjs');

module.exports = (password, hashedPassword) => compare(password, hashedPassword);
