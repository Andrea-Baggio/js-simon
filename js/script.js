const eleStartButton = document.querySelector('#first-block');
const eleRules = document.querySelector('.rules');
const eleBar = document.querySelector('.bar');
const eleSecondBar = document.querySelector('.second-bar');
const eleGame = document.querySelector('.game');

function startButton () {
    eleStartButton.classList.add('hidden');
    eleRules.classList.remove('hidden');
    eleBar.classList.remove('hidden');
    
    setTimeout (function() {
        eleRules.classList.add('hidden');
        eleBar.classList.add('hidden');
    }, 7000);

    setTimeout (function() {
        eleGame.classList.remove('hidden');
        eleSecondBar.classList.remove('hidden'); 
    }, 7100);
    
    setTimeout (function() {
        eleGame.classList.add('hidden'); 
        eleSecondBar.classList.add('hidden'); 
    }, 37000);

    const arrNumbers = [];

    const randomNumbers1 = Math.floor(Math.random() * 100);
    const randomNumbers2 = Math.floor(Math.random() * 100);
    const randomNumbers3 = Math.floor(Math.random() * 100);
    const randomNumbers4 = Math.floor(Math.random() * 100);
    const randomNumbers5 = Math.floor(Math.random() * 100);

    for (let i = 0; i < 5; i++) {  
        arrNumbers.push(randomNumbers1, randomNumbers2, randomNumbers3, randomNumbers4, randomNumbers5);       
        console.log(arrNumbers[i]);        
       
        eleGame.innerHTML += arrNumbers[i] + ' ';
    }
}

eleStartButton.addEventListener('click', startButton);
                                           


//questa roba va inserita nella funzione e va sincronizzata con eleGame
// questo serve per la validazione della risposta
// for (let i = 0; i < arrNumbers.length; i++) {

//     if (userNumbers === arrNumbers[i]) {
//     alert('Bravo');
//     } else {
//         alert('nope');
//     }

// }
