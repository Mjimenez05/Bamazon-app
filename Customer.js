var Table = require("cli-table");
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    else console.log("\nWelcome to the store");
    console.log("==============================");
    start();
});

function start() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to see our items today?",
        name: "confirm",
        defalut: true
    }]).then(function (answer) {
        if (answer.confirm) {
            var query = "SELECT item_id, product_name, department_id, price, stock_quantity FROM products";
            connection.query(query, function (err, res){
                var table = new Table({
                    head: [
                        "Product ID",
                        "Product Name",
                        "Department",
                        "Price",
                        "Stock Quantity"],
                    colWidths: [20, 20, 20, 20, 20]
                });
                for (var i = 0; i < results.length; i++) {
                    table.push([
                        res[i].item_id,
                        res[i].product_name,
                        res[i].departmernt_id,
                        "$" + res[i].price,
                        res[i].stock_quantity
                    ]);
                }
                console.log("\n" + table.toString() + "\n");
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
        name: "id",
        type: "input",
        message: "Enter product you would like to buy:",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    },
    ])

        .then(function (answer) {
            var query = "SELECT item_id, stock_quantity, price, product_sales FROM products WHERE ?";
            connection.query(query, {
                item_id: answer.id
            },
                function (err,res) {
                    if (err) throw err
                    var checkStock = res[0].stock_quantity
                    var purchasedStock = answer.units

                    if (checkStock < purchasedStock) {
                        console.log("Insufficient Amount!")
                        start();
                    } else {
                        var updateStock = checkStock - purchasedStock;
                        connection.query("UPDATE products SET product_sales + " + checkout + "WHERE ?", {
                            item_id: answer.id
                        });
                        console.log("Your total is: $" + checkout);
                        console.log("======================================");
                        start();
                    };
                });
        });
    };
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