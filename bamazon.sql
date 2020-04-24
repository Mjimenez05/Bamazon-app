DROP  DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255)NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantitity INT Null,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantitity)
VALUES ("Thrustmaster TSSH Sequential Handbrake & Shifter", "Electronics", 269.99, 5),
("Next Level Racing Motion Platform v3", "Electronics", 3000.00,8),
("Thrustmaster Open Wheel Add On", "Electronics", 149.99, 10),
("F1 2019 Anniversary Edition - Xbox One", "Game", 59.99, 20),
("Thrustmaster Scuderia Ferrari Race Kit", "Electronics", 207.45, 3),
("ButtKicker BK-GR Gamer", "Electronics", 149.99, 16),
("Dirt Racing Shoe", "Clothing", 39.99, 0),
("Razer Baselisk Wireless Gaming Mouse", "Electronics", 59.99, 6),
("I Paused My Game to Be Here T-Shirt", "Clothing", 269.99, 25),
("L Shaped Desk Corner Computer Desk", "Furniature", 159.99, 7)
