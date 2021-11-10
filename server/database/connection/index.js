require('dotenv').config();

const { Pool } = require('pg');

let dbUrl = '';

const {
  env: {
    NODE_ENV, TEST_DB_URL, DEV_DB_URL, DATABASE_URL,
  },
} = process;

switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('NO DATABASE URL !');
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
