


const containerElement = document.querySelector('.container');

    

for(let a = 1; a < 100; a++){


    const p = document.createElement('p');

    p.append('sei multiplo di' + a + 'quindi il tuo valore è:');
    
    containerElement.append(p);


    if ((a % 3 === 0) && (a % 5 === 0)){  

        p.append('FizzBuzz');
    
        containerElement.append(p);

    }else if (a % 5 === 0){

        p.append('Buzz');
    
        containerElement.append(p);

    }else if (a % 3 === 0){

        p.append('Fizz');
    
        containerElement.append(p);

    }else{

        p.append('number');
    
        containerElement.append(p);

    };
    
    

 
};



   
