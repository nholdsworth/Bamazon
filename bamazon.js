const mysql = require('mysql');

const inquirer = require('inquirer');

const connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abcd1234',
    database: 'bamazon_db'

});

connection.connect(function (error) {

    if (error) throw error;

    console.log(`connected as id ${connection.threadId}`);

});

connection.query('SELECT * FROM products', function (error, response) {

    if (error) throw error;

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

    console.table(response);

    // This is a function to ask the user to input the id number of the item they would like to buy and how many
    function selectItem() {
        // This is a question prompt using inquirer
        inquirer.prompt([{
            name: `itemID`,
            type: `input`,
            message: `Please enter the item_ID of the item you would like to purchase`

        }, {
            name: `amount`,
            type: `input`,
            message: `how many would you like to purchase today?`
        }
        ])
            .then(function (answer) {
                let ID = (answer.itemID);
                let quantityDesired = answer.amount;
                // if (quantityDesired > stock) {
                //     console.log(`not enough`);
                //     selectItem();
                // }
                console.log(quantityDesired);
                get_stock(ID);
                get_price(ID, quantityDesired);

            });
    };

    // selectItem();

    function get_stock(ID) {
        console.log(`this is the get_stock query/function`);

        connection.query(`SELECT stock_quantity FROM products WHERE item_ID = ${ID}`, function (error, response) {

            if (error) throw error;
            let stock = (response[0].stock_quantity);
            console.log(stock);
            return stock;

        });

    };

    function get_price(ID, quantity) {
        console.log(`this is the get_price query/function`);

        connection.query(`SELECT price FROM products WHERE item_ID = ${ID}`, function (error, response) {
            if (error) throw error;
            console.log(response[0].price);
            let priceForItem = response[0].price;
            let cost = priceForItem * quantity
            console.log(`your total comes to ${cost} is that okay?`);
        });
    };

    selectItem();

});

connection.end();

// selectItem();

// function get_stock(ID) {
//     console.log(`this is the get_stock query/function`);

//     connection.query(`SELECT stock_quantity FROM products WHERE item_ID = ${ID}`, function (error, response) {

//         if (error) throw error;
//         let stock = (response[0].stock_quantity);
//         console.log(stock);
//         return stock;

//     });

// };

// function get_price(ID, quantity) {
//     console.log(`this is the get_price query/function`);

//     connection.query(`SELECT price FROM products WHERE item_ID = ${ID}`, function (error, response) {
//         if (error) throw error;
//         console.log(response[0].price);
//         let priceForItem = res[0].price;
//         let cost = priceForItem * quantity
//         console.log(`your total comes to ${cost} is that okay?`);
//     });
// };

// connection.end();







































































    // Ask user for which product they want to buy
//     let buy = function () {

//         inquirer.prompt({
//             name: `whatItem`,
//             type: `rawlist`,
//             choices: function (value) {
//                 let choiceArray = [];
//                 for (i = 0; i < response.length; i++) {
//                     choiceArray.push(response[i].product_name);
//                 }
//                 return choiceArray;
//             },
//             message: `Please choose the item that you would like to purchase??`
//         }).then(function (answer) {
//             if (answer.whatItem.ParseInt === response[i]) {
//                 let desiredItem = answer.whatItem
//                 inquirer.prompt({
//                     name: `youSure`,
//                     type: `confirm`,
//                     message: `you have selected ${desiredItem} is this the item you wanted?`,

//                 }).then(function (answer) {
//                     if (answer.youSure === false) {
//                         buy();
//                     } else {
//                         inquirer.prompt({
//                             name: `howMany`,
//                             type: `input`,
//                             message: `How Many ${desiredItem}'s would you like to purchase this fine day?`
//                         }).then(function (answer) {
//                             let amountDesired = parseInt(answer.howMany);
//                             console.log(amountDesired);
//                             console.log(desiredItem);
//                             // for (i = 0; i < response.length; i++) {

//                             // }
//                                 // if (amountDesired <= stockQuantity) {
//                                 //     let purchaseCost = amountDesired * price;
//                                 //     console.log(purchaseCost);
//                                 //     inquirer.prompt({
//                                 //         name: `amountOwed`,
//                                 //         type: `confirm`,
//                                 //         message: `Your Total comes to ${purchaseCost} is that okay?`
//                                 //     })
//                                 // }

//                         })
//                     }
//                 })
//             }
//         })
//     }

//     buy();

// });


// Ask user how many of the product they would like to buy
// Check to make sure that there is enough of the product in stock to complete the order
// If not display message that there is not enough of the product available to complete the order and prevent the order from executing
// Else fulfill the customers order
// remove number ordered from the stock qauntity 
// display the total cost of the purchase to the customer