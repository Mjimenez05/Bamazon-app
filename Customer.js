var Table = require("cli-table");
var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    else console.log("\nWelcome to the store");
    console.log("==============================");
    start();
});

function start() {
    inquirer.prompt([{
        type: "number",
        message: "What is the item id you're looking for?",
        name: "confirm",
        defalut: true
    }]).then(function(answer) {
        if (answer.confirm) {
            var query = "SELECT item_id, product_name, department_id, price, stock_quantity FROM products";
            connection.query(query, function(err, res) {
                var table = new table({
                    head: [
                        "Product ID",
                        "Prooduct Name",
                        "Department",
                        "Price",
                        "Stock Quantity"
                    ],
                    colWidths: [20, 20, 20, 20, 20]
                });
                for (var i = 0; i < res.length; i++) {
                    table.push([
                        res[i].item_id,
                        res[i].product_name,
                        res[i].departmernt_id,
                        "$" + res[i].price,
                        res[i].stock_quantity
                    ]);
                }
                console.log("\n" + table.tostring() + "\n");
                purchaseItems();
            });
        } else {
            console.log("Come on back");
            connection.end();
        };
    });
};

function purchaseItems() {
    inquirer.prompt([{

    }])
}
// function purchaseItems(ID, quantity) {
//     connection.query('SELECT * FROM products WHERE id = ' + ID, function(err, res) {
//         if (err) {
//             console.log(err);
//         } else if (quantity <= res[0].stock_quantity) {
//             var total = res[0].price * quantity;
//             connection.query("UPDATE porducts SET stock_quantity = stock_quantity - " + quantity + "WHERE + ID");
//             console.log(res[0].stock_quantity);
//             console.log("Your total purchase is " + quantity + " " + res[0].product_name + " is " + total + " Thank you for shopping bamazon!!");
//         } else {
//             console.log("We are almost out of items. Whe do have " + res[0].stock_quantity + "Units Available.");
//         };
//         realProducts();
//     })
// }