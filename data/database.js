// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const db = await mysql.createPool({
    host: 'mainline.proxy.rlwy.net',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATBASE,
    port: 24558
});

module.exports = db