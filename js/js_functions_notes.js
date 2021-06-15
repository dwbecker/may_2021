// Recieving input from user and calculating the sum

const HTMLBadges = prompt('How many HTML badges do you have?'); //prompts user to enter number of HTML badges
const CSSBadges = prompt('How many CSS badges do you have?'); //prompts user to enter number of CSS badges

// const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges); //parseInt() parses the string provided by user into an interger
const totalBadges = +HTMLBadges + +CSSBadges //This method (unary plus) is faster and allows you to combine integers and float points

console.log(totalBadges); //displays the total number of badges entered by user in the console

// Functions: Multiple Returns //

function isFieldEmpty() {
    const field = document.querySelector('#info'); 
     if (!field.value) {
       return true;
     } else {
       return false;
     }
   }
   
   const fieldTest = isFieldEmpty();
   
   if (fieldTest) {
     alert('Please provide your information.');
   }

// Functions Parameters and Arguments //

    // Passing arguments to functions

    function goToCoffeeShop(drink) {
        alert(`Your ${drink} is on the way!`)
    }

    goToCoffeeShop('Espresso') //You can replace this argument with whatever you want.

        // Example

        function getRandomNumber(upper) {
            const randomNumber = Math.floor( Math.random() * upper ) + 1;
            return randomNumber;
        }
        
        console.log( getRandomNumber(6) ); 
        console.log( getRandomNumber(100) );
        console.log( getRandomNumber(59) ); //The numbers entered in the parentheses act as the value for (upper) in the function.

    // Passing multiple arguments

    function goToCoffeeShop(drink, pastry) { //Separate arguments with a comma.
        alert(`Your ${drink} and ${pastry} are on the way!`)
    }

    goToCoffeeShop('Espresso', 'croissant') //You can replace this argument with whatever you want. Separate values with comma.

        //Example

        function getArea(width, length, unit) {
            const area = width * length;
            return `${area} ${unit}`;
        }
        
        alert( getArea(6, 4, 'sq ft') );

        //The logic of your conditional statement should go something like this: if the first number is larger than the second number, return the larger number. else return the second number

        function max(num1, num2) { 
            if (num1 > num2) {
            return num1;
            } else {
              return num2;
            }
          }

          console.log( max(4, 8) );

    //Variable Scope - protects variables from overwriting each other
    
        //global scope - declare as const so global variables will not be overwritten
        const person = 'Lee';

        function greeting() {
            //function scope
            let person = 'Meg';
            alert(`Hi ${person}!`);
        }

        greeting(); //This will call Meg.
        alert(`Hi ${person}!`); //This will call Lee

    // Function Declarations vs. Function Expressions

        const getRandomNumber = function(upper) {
            const randomNumber = Math.floor( Math.random() * upper ) + 1;
            return randomNumber;
        };

        getRandomNumber(10)

        //You can call a function above the declaration's code, but you cannot call a function that is an expression before the expression's code.

// Using Arrow Syntax
    
    //declaration
    function getRandomNumber() {
        const randomNumber = Math.floor( Math.random() * 6 ) + 1;
        return randomNumber;
    }

    //expression - not hoisted
    const getRandomNumber = function() {
        const randomNumber = Math.floor( Math.random() * 6 ) + 1;
        return randomNumber;
    };

    //arrow syntax - not hoisted
    const getRandomNumber = (upper) => {
        const randomNumber = Math.floor( Math.random() * upper ) + 1;
        return randomNumber;
    };

        //Practice: rewrite as a arrow function

        function getArea(width, length, unit) {
            const area = width * length;
            return `${area} ${unit}`;
        }

        const getArea = (width, length, unit) => {
            const area = width * length;
            return `${area} ${unit}`;
        }

    //default function parameters

        function sayGreeting(name = 'student') { //you can provide a default parameter within the function
            return `Good morning, ${name}!`
        }

        function sayGreeting(greeting = 'Good morning', name = 'student') { //you can provide a default parameter within the function
            return `${greeting}, ${name}!`
        }

        sayGreeting(undefined, 'Guil') //undefined will send the default parameter for the specific argument.

//Descriptive comments for functions - JSDoc

/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

 function myFunc( param1, param2 ) {
    // function returns a value...
  }

/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

 function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
  }
  //Function Challenge
        
  //declaration
        function getRandomNumber() {
            const randomNumber = Math.floor( Math.random() * 6 ) + 1;
            return randomNumber;
        }

        //expression - not hoisted
        const getRandomNumber = function() {
            const randomNumber = Math.floor( Math.random() * 6 ) + 1;
            return randomNumber;
        };

        //arrow syntax - not hoisted
        const getRandomNumber = (upper) => {
            const randomNumber = Math.floor( Math.random() * upper ) + 1;
            return randomNumber;

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

    function getRandomNumber(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    function getRandomNumber(lower, upper = 100) {
        if (isNaN(lower || isNaN(upper) )) {
            throw Error('Both arguments must be numbers.')
        }
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
