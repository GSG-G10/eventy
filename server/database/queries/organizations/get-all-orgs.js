const connection = require('../../connection');

const getAllOrgs = () => connection.query('SELECT id, name, image, categories FROM organization');

module.exports = getAllOrgs;
