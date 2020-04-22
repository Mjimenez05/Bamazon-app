const inquirer = reqiure("inquirer");
const mysql = require('msql');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
});

function readProducts() {
    console.log("These Items are Available:\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        runBamazon();
    })
}

function runBamazon() {
    inquirer.prompt([{
                type: "number",
                message: "What is the item id you're looking for?",
                name: "id"
            },
            {
                type: "number",
                message: "How many units would you like?"
                name: "Quantity"
            }
        ])
        .then(function)
}