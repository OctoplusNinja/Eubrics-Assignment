require('dotenv').config();
const Pool = require('pg').Pool;


const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// const pool = new Pool({
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 5432,
//     database: "eubrics"
// });

module.exports = pool;