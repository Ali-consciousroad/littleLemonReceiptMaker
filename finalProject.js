
// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
/* Step 1: In the function `getPrices()`, 
give it the parameter of `taxBoolean` */
function getPrices(taxBoolean) {
    /* Step 2: Inside the `getPrices()` function, 
    code a for loop that will loop over all the objects inside the `dishData` array. */
    for(i = 0; i < dishData.length; i++){
        /* Step 3: Inside the for loop, declare a `finalPrice` variable, 
        without assigning it a value. */
        var finalPrice;
        /* Step 4: Still inside the for loop, add an if condition, 
        checking that the `taxBoolean` is set to `true`. 
        Inside the if block, multiply the following: * the price of the currently looped-over object from the `dishData` array, and * the tax value. 
        Assign the multiplied value to the finalPrice variable. */
        if(taxBoolean == true){
            finalPrice = dishData[i].price + dishData[i].price * 0.2; 
        }
        /* Step 5: Right after the if condition, add an else if, checking if the value of `taxBoolean` is false. 
        Inside this condition's block, 
        assign the currently looped-over dish price property in the `dishData` array to the `finalPrice` variable. */
        else if(taxBoolean == false){
            finalPrice = dishData[i].price;
        }
        /* Step 6: Code the `else` case, and inside of it,
        add two lines of code A console log of the string:  
        - "You need to pass a boolean to the getPrices call!"  
        - return (to "jump out" of the further function execution)*/
        else{
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
        /* Step 7: After all the conditional's statements, 
        but still inside the for loop, 
        code another console log with four arguments 
        1. The string `"Dish: "`
        2. The value of currently looped-over dish object's name property
        3. The string `"Price: $"`
        4. The value of the `finalPrice` variable
        */
        console.log("Dish: " +dishData[i].name+ " Price: $" + finalPrice);
    }
}

// Implement getDiscount()
/* Step 8: You're finshed with the `getPrices()` function, and now you're ready to code another function. 
Give the `getDiscount()` function, two parameters: the `taxBoolean` and the `guests` parameter. */
function getDiscount(taxBoolean, guests) {
    /* Step 9: Inside the `getDiscount()` function,  on the very first line of its body, 
    invoke the `getPrices()` function, passing it the `taxBoolean` as an argument. */
    getPrices(taxBoolean);
    /* Step 10 / Test: Implement your defensive coding skills, 
    and check that the type of the `guests` parameter is 'number' 
    and  that the value of the guests variable is greater than zero and less than 30.  
    If all these conditions return true, 
    code the body of the conditional as described in the next step. 
    If they don't all return true, code the body of the else conditional as instructed in step 12. */
    if((guests > 0 && guests < 30)
    && typeof guests === 'number'){
        /* Step 11: Inside the if statment, declare a new variable, named `discount`, and set it to 0. 
        On the next line, add another if...else if: in the first if, you'll check that the value of the `guests` variable is less than 5. 
        If that's the case, reassign the value of the discount variable to 5; 
        - Inside the else if condition, check that the value of the guests variable is greater than or equal to 5 - if that's the case, reassign the discount variable to 10.
        - Console log the following after closing your else-if statement: `'Discount is: $' + discount);` */
        var discount = 0;
        if(guests < 5){discount = 5;}
        else if(guests >= 5){discount = 10;}
        console.log(`The number of guest is: ${guests}`);
        console.log("Discount is: $" + discount);
    }

    /* Step 12: In the else condition, console log the following string: `'The second argument must be a number between 0 and 30'`. 
    Since you've finished declaring both the `getPrices()` and the `getDiscount()` functions, 
    you can now invoke the `getDiscount()` function several times, with various combinations of arguments, to check the behavior. <br>*/
    else {
        console.log("The second argument must be a number between 0 and 30")
    } 
}

// Call getDiscount()
getDiscount(true, 4);
getDiscount(false, 10);
