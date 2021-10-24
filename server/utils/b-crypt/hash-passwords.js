const { hash } = require('bcryptjs');

module.exports = (password) => hash(password, 10);
