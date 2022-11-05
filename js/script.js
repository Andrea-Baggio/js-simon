/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const eleStartButton = document.querySelector('#first-block');
const eleRules = document.querySelector('.rules');
const eleBar = document.querySelector('.bar');
const eleSecondBar = document.querySelector('.second-bar');
const eleGame = document.querySelector('.game');

// const arrNumbers = ['1'];
// const userNumbers = prompt('Inserisci i numeri che ricordi!');

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

    const randomNumbers = Math.floor(Math.random() * 100 + 1);
    for (let i = 0; i < 5; i++) {  
        arrNumbers.push(randomNumbers);       
        console.log(arrNumbers);            
       
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

