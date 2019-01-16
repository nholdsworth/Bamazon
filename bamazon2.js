// Creating the dependencies for the app
const mysql = require("mysql");
const inquirer = require('inquirer');

// connecting to the database I created for the app
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abcd1234',
    database: 'bamazon_db'
})

// using a simple select all query to display the contents of the database in the terminal
connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    console.log(`-------------------------------------------------------------------------------------------------
    \n
    Welcome to Bamazon, where you will find a small and random selection of things you might want to buy but definitely do not need!  100 percent of the proceeds will be donated to TeachingCatsHowToSwim.org: A Non-Profit dedicated to creating a more just and equitable world by teaching cats to overcome their fear of water so they can catch their own fish becuase cats love to eat fish but they are terrible swimmers!
    \n
    ---------------------------------------------------------------------------------------------------
    \n`);

    console.log(`Bamazon proudly offers free 4 hour shipping to our subscribers, please open your windows so that our drones can fly into your house and deliver your package(s) safely.  Don't worry about security, you can trust us... Really!  Who you can't trust is your neighbors!  They are dirty double crossers who secretly covet your precious belongings and will stop at nothing to take them from you!  BEWARE THY NEIGHBORS!  We invade your privacy for *security (see below) purposes only!
    \n
    *Bamazon defines security purposes as follows:  coming over anytime we want for no good reason to eat your food, wrecklessly use any of your belongings, sleep in your bed and have raucous parties till all hours of the morning and not clean up after ourselves.  We reserve the right to alter this definition at any time without prior notice and pretty much do whatever we want whenever we want and there is nothing you can do about it!*
    \n
    ----------------------------------------------------------------------------------------------------
    \n
    Thank you for choosing Bamazon.  Here are the items we currently have in stock:
    \n`);

    console.table(res);


})

// This is a function to ask the user to input the id number of the item they would like to buy and how many
function selectItem() {
    // This is a question prompt using inquirer
    inquirer
        .prompt([{
            name: "itemID",
            message: "Please enter the item_ID of the Item you would like to purchase"

        }, {
            name: "amount",
            message: "how many?"
        }
        ])
        .then(function (answer) {
            let ID = (answer.itemID);
            let quantityDesired = answer.amount;
            if (quantityDesired > stock) {
                console.log(`not enough`);
                selectItem();                
            }
            console.log(answer.amount);
            get_stock(ID);
            get_price(ID, quantity);

        });
};
selectItem();

function get_stock(ID) {
    console.log("connected!");

    connection.query(`SELECT stock_quantity FROM products WHERE item_ID = ${ID}`, function (err, res) {
        if (err) throw err;
        let stock = (res[0].stock_quantity);
        console.log(stock);
        return stock;

    })

}

function get_price(ID, quantity) {
    console.log("connected!");

    connection.query(`SELECT price FROM products WHERE item_ID = ${ID}`, function (err, res) {
        if (err) throw err;
        console.log(res[0].price);
        let priceForItem = res[0].price;
        let cost = priceForItem * quantity
        console.log(`your total comes to ${cost} is that okay?`);
    })
}

