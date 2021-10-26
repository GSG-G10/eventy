const fs = require('fs');
const path = require('path');
const connection = require('../connection');

const dbBuilder = () => {
  const filepath = path.join(__dirname, 'build.sql');
  let sql = fs.readFileSync(filepath).toString();
  sql += fs.readFileSync(path.join(__dirname, 'fakeData.sql')).toString();
  return connection.query(sql);
};

dbBuilder();

module.exports = dbBuilder;
