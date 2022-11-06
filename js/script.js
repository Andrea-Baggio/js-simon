const eleStartButton = document.querySelector('#first-block');
const eleRules = document.querySelector('.rules');
const eleBar = document.querySelector('.bar');
const eleSecondBar = document.querySelector('.second-bar');
const eleGame = document.querySelector('.game');
const eleForm = document.querySelector('form');
const eleInput = document.querySelector('input')

const arrNumbers = [];

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

    setTimeout (function() {
        eleForm.classList.add('show');
    }, 37400);

    const randomNumbers1 = (Math.floor(Math.random() * 200) + 1);
    const randomNumbers2 = (Math.floor(Math.random() * 200) + 1);
    const randomNumbers3 = (Math.floor(Math.random() * 200) + 1);
    const randomNumbers4 = (Math.floor(Math.random() * 200) + 1);
    const randomNumbers5 = (Math.floor(Math.random() * 200) + 1);

    for (let i = 0; i < 5; i++) {  
        if (!arrNumbers.includes(i)) {
            arrNumbers.push(randomNumbers1, randomNumbers2, randomNumbers3, randomNumbers4, randomNumbers5); 
            
            // console.log(arrNumbers[i]);  
        }
              
        eleGame.innerHTML += arrNumbers[i] + ' ';
    }
}

eleStartButton.addEventListener('click', startButton);

eleForm.addEventListener('submit', function (event) {
	event.preventDefault();

	for (let i = 0; i < arrNumbers.length; i++) {
        //validazione del risultato
		if (eleInput.value === arrNumbers[i]) {
			console.log('trovata');
		} else {
            console.log('non trovata');
        }
	}
});