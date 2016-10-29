var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	user: "root",
	password: "",
	host: "localhost",
	port: 3306,
	database: "Bamazon"

})

//create an array to hold response data from DB
var products = [];

//creates connection to DB called Bamazon
connection.connect(function(err){

	if (err) throw err;

    console.log("connected as id " + connection.threadId);
    displayProducts();
 
})

//displays available products on terminal and stores the output in var=products
var displayProducts = function() {
	var query = "SELECT * FROM products";

	connection.query(query,function(err,res) {

		if (err) throw err;

		console.log("Buy from our AMAZING store!");
		console.log("________________________________");
		
		for (var i =0; i<res.length; i++) {
			console.log("ID: " + res[i].ItemID + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | Price: " + res[i].Price + " | Stock: " + res[i].StockQuantity);
		}
		console.log("________________________________");
		
		for (var i = 0; i < res.length; i++) {
			products.push(res[i]);
		}

		shopProducts();
	});

}

//prompts customer to choose an item for purchase and the amount to purchase
var shopProducts = function () {

 	inquirer.prompt([{
 		name: "item",
 		type: "input",
 		message: "Enter the ID for the product you want to buy."
	},
	{	
		name: "quantity",
		type: "input",
		message: "How many would you like to buy?"
	}]).then(function(answer){
		console.log(answer);
		var itemID = answer.item;
		console.log(itemID);
		var chosenItem = products[itemID-1];
		console.log(chosenItem);

		//calculates new inventory levels
		var newQuantity = chosenItem.StockQuantity - answer.quantity;
		console.log("New stock count: " + newQuantity);

		//checks to see if sufficient inventory available to fulfill customer's request
		if (newQuantity >= 0) {
			connection.query('UPDATE products SET ? WHERE itemID = ?',[{StockQuantity: newQuantity},itemID]);
			continueShopping();
		} else {
			console.log("This item is not in stock.  Try another.");
			continueShopping();
		}
	})

}

//Gives customer option to continue shopping or quit program
var continueShopping = function() {

	inquirer.prompt([{
		name: "proceed",
		type: "rawlist",
		message: "Continue shopping?",
		choices: ["Yes","No"]
	}]).then (function(answer){
		if (answer.proceed == "Yes"){
			displayProducts();
		} else {
			console.log("Thankyou for shopping at Bamazon.");
		}
	})
}
