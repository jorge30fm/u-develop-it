const mysql = require('mysql2');

const db = mysql.createConnection(
        {
            host: 'localhost',
            //your MySQL username,
            user: 'root',
            //Your MySQL password
            password: 'jorgeWebDeveloper12484820!?',
            database: 'election'
        },
        console.log('Connected to the election database.')
    );

module.exports = db;