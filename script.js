


const containerElement = document.querySelector('.container');


for(let a = 1; a < 100; a++){

    if ((a % 3 === 0) && (a % 5 === 0)){  

        console.log('FizzBuzz');

    }else if (a % 5 === 0){

        console.log('Buzz');

    }else if (a % 3 === 0){

        console.log('Fizz');

    }else{

        console.log('a')

    };
};


/*
const p = document.createElement('p');

    p.append('multiplo' + a);

    containerElement.innerHTML
