DROP DATABASE IF EXISTS Bamazon_DB;
CREATE DATABASE Bamazon_DB;


DROP TABLE IF EXISTS products;
CREATE TABLE products (
item_ID INTEGER(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
product_name VARCHAR(150) NOT NULL,
department_name VARCHAR(150) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INTEGER(11) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Gil Scott Heron complete recordings box-set', 'Music', 300.00, 9);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('SP 303', 'Electronics', 400.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('The Practice Of The Wild', 'Books', 17.99, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Nintendo Switch', 'Electronics', 299.99, 27);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Locus Solus', 'Books', 24.99, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Nespresso Machine', 'Home Appliance', 199.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Kumquat Bush', 'Garden', 70.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Permaculture A Designers Manual', 'Books', 75.00, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Hori Hori', 'Garden', 19.99, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('A Brighter Tomorrow', 'Metaphysical', 00.00, 26280);

SELECT * FROM products