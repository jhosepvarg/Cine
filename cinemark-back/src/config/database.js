const { createPool, Pool } = require('mysql');
const { promisify } = require('util');

const pool = createPool({
    host: "dfkpczjgmpvkugnb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "w8jmiwqz4cf5n1y5",
    password: "jzj0ehshipn2npio",
    database: "q5k2x401hmdz1hh1",
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
    } else {
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED")
    }
});

pool.query = promisify(pool.query);

module.exports = pool;