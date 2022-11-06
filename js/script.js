const eleStartButton = document.querySelector('#first-block');
const eleRules = document.querySelector('.rules');
const eleBar = document.querySelector('.bar');
const eleSecondBar = document.querySelector('.second-bar');
const eleGame = document.querySelector('.game');
const eleForm = document.querySelector('.form');

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
    }, 7200);
    
    setTimeout (function() {
        eleGame.classList.add('hidden'); 
        eleSecondBar.classList.add('hidden'); 
    }, 37200);

    // setTimeout (function() {
    //     eleForm.classList.add('show');
    // }, 38200);

    const arrNumbers = [];

    const randomNumbers1 = Math.floor(Math.random() * 200);
    const randomNumbers2 = Math.floor(Math.random() * 200);
    const randomNumbers3 = Math.floor(Math.random() * 200);
    const randomNumbers4 = Math.floor(Math.random() * 200);
    const randomNumbers5 = Math.floor(Math.random() * 200);

    for (let i = 0; i < 5; i++) {  
        arrNumbers.push(randomNumbers1, randomNumbers2, randomNumbers3, randomNumbers4, randomNumbers5);       
        // console.log(arrNumbers[i]);        
       
        eleGame.innerHTML += arrNumbers[i] + ' ';

        // if (userNumbers === arrNumbers[i]) {
        // alert('Bravo');
        // } else {
        //     alert('nope');
        // }
    }
}

eleStartButton.addEventListener('click', startButton);

eleForm.addEventListener ('submit', function (event) {
	event.preventDeafault();
})
