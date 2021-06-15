//Basic Array

    const planets = [ 
        'Mercury', //0 Arrays are zero-indexed, meaning the first element is assigned the value 0, the second 1, third 2, etc.
        'Venus', //1
        'Earth', //2
        'Mars'//3
    ];

//Access elements in an Array

    console.log( planets[2] );

//Add elements to an Array

    const instruments = [
        'piano',
        'drums',
        'trumpet'
    ];

    instruments.push ('guitar', 'violin', 'triangle'); //pushes item to the end of the array
    instruments.unshift ('cowbell', 'tuba'); //adds elements to the beginning of arrays

//Removing elements from an Array

    .pop() //removes the last element
    .shift() //removes the first element of an array

    const numbers = [100, 200, 300, 400, 500];

    numbers.pop(); //returns 500

    numbers.unshift(0); //const numbers = [0, 100, 200, 300, 400, 500];

    numbers.shift(); //returns 0

//Combine and copy Arrays with the Spread Operator

    const middle = ['lettuce', 'cheese', 'patty'];
    const burger = ['top bun', ...middle, 'bottom bun']; // ... is the Spread Operator and this allows you to insert the elements of the middle[] array between the two elements of the burger[] array.

    const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
    const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassoon'];
    const instruments = [...brass, ...woodwind];

    brass.push('flugelhorn') //does not add this instrument to the instruments[] array, only the brass[] array.

    const numbers = [100, 200, 300, 400, 500];

    console.log( Math.max(...numbers) ); //returns 500

    const mathStudents = [
        'Marty',
        'Jennifer',
        'Lorraine',
        'Goldie'
      ];
      
      const scienceStudents = [
        'Emmett', 
        'Clara', 
        'Needles',
        'Strickland'
      ];
      
      const mathStudentsCopy = [...mathStudents];
      const scienceStudentsCopy = [...scienceStudents];
      
      // This affects the copied arrays only
      //  The original arrays remain unchanged
      mathStudentsCopy.pop();
      scienceStudentsCopy.push('Marvin');

//Using a 'for' Loop to Iterate Over an Array

    const scienceStudents = [
        'Emmett', 
        'Clara', 
        'Needles',
        'Strickland'
    ];
      
    for ( let i = 0; i < scienceStudents.length; i++ ) {
        console.log( students[i] ;)
      }