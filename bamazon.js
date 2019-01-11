const mysql = require('mysql');

const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abcd1234',
    database: 'bamazon_db',
});

connection.connect(function (error) {
    if (error) throw error;
    console.log(`connected as id ${connection.threadId}`);
});

let query = connection.query('SELECT * FROM products', function (error, response) {
    if (error) {
        throw error;
    }

    console.table(response);

});

connection.end();

