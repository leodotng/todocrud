require('dotenv').config();


module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/my_life',
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
};
