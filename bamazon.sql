DROP IF DATABASE EXISTS bamazon;

CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCRIMENT,
    product_name VARCHAR(255)NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantitity INIT Null,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantitity)
VALUES ("Thrustmaster TSSH Sequential Handbrake & Shifter", "Electronics", 269.99),
("Next Level Racing Motion Platform v3", "Electronics", 3000.00),
("Thrustmaster Open Wheel Add On", "Electronics", 149.99),
("F1 2019 Anniversary Edition - Xbox One", "Game", 59.99),
("Thrustmaster Scuderia Ferrari Race Kit", "Electronics", 207.45),
("ButtKicker BK-GR Gamer", "Electronics", 149.99),
("Dirt Racing Shoe", "Clothing", 39.99),
("Razer Baselisk Wireless Gaming Mouse", "Electronics", 59.99),
("I Paused My Game to Be Here T-Shirt", "Clothing", 269.99),
("L Shaped Desk Corner Computer Desk", "Furniature", 159.99)
