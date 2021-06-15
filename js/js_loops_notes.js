
// While Loop

    function getRandomNumber(upper) {
        return Math.floor( Math.random() * upper ) + 1;
    }

    let counter = 0

    while ( counter < 10 ) {
        console.log( `The random number is ${getRandomNumber(10)}.` );
        counter += 1; //This adds value to the counter variable each time the loop runs, so once the counter variable hits 10, the loop stops because that is the number we want it to stop at.
    }

// Do While Loop
    // Runs the loop before checking the while()

    function getRandomNumber(upper) {
        return Math.floor( Math.random() * upper ) + 1;
    }

    let counter = 0

    do {
        console.log( `The random number is ${getRandomNumber(10)}.` );
        counter ++; //increment operator. This automatically increases the value by 1, so you don't have to type "+= 1"
    } while ( counter < 10 );

    let counter = 10
    do {
        console.log( `The random number is ${getRandomNumber(10)}.` );
        counter --; //decrement operator. This automatically decreases the value by 1, so you don't have to type "-= 1". This way you can count down from 10 to 0
    } while ( counter > 0 );

//For Loop

    function getRandomNumber(upper) {
        return Math.floor( Math.random() * upper ) + 1;
    }

    for ( let i = 0; i < 10; i++ ) {
        console.log( `The random number is ${getRandomNumber(10)}.` );
    }

// Dynamically display HTML with a Loop

    const main = document.querySelector('main');
    let hmtl = '';

    for ( let i = 1; i <= 10; i++ ) {
        html += `<div>${i}</div>`;
    }

    main.innerHTML = html;

//Break statement to exit a loop

    const secretWord = 'tomato';
    let message = 'Access denied :(';

    for ( let i = 5; i >= 1; i-- ) {  
    let guess = prompt(`Enter the secret word. You have ${i} tries.`);
    if ( guess === secretWord ) {
        message = 'Welcome to the secret loop world!';
        break;  // immediately terminate the loop
    }
    }

    alert(message);

    //without the break statement, this loop would still run 5 times, even if the user enters the correct secret word

    const tMinus = 10;
    let message = 'Liftoff! 🚀';

    for ( let i = tMinus; i >= 1; i-- ) { 
    let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
    if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
    }
    }

    alert(message);