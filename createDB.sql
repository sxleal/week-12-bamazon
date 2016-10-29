CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	ItemID INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(100) NOT NULL,
	DepartmentName VARCHAR(100) NOT NULL,
	Price DECIMAL (10,2),
	StockQuantity INT (10),
	PRIMARY KEY(ItemID)
);

INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Lavendar Oil","Home",7.99,12);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Silk Curtains","Home",50.25,3);

INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Cat in the Hat","Books",2.99,120);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("War and Peace","Books",12.00,99);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Lord of the Rings","Books",8.00,1021);

INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Changes","Songs",.99,21);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("The Trees","Songs",.99,1000);

INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Scrabble","Toys",12.50,500);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Legos","Toys",33.00,575);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Mr. Potato Head","Toys",3.50,150);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("My Little Pony","Toys",11.00,421);
INSERT into products (ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Monopoly","Toys",12.75,201);

SELECT * FROM products;
