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

const eleStartScreen = document.querySelector('.start-screen');
const eleStartButton = document.querySelector('#btn-start');
const eleContainer = document.querySelector('.container');


eleStartButton.addEventListener('click', function() {
    eleContainer.innerHTML = "";
})

function startButton () {

}


/*
eleGrid.classList.remove('hidden');
eleStartScreen.classList.add('hidden');


const element = document.querySelector('.classe');

const eleAppend = document.createElement('div');
eleAppend.classList.add('class');
element.append(eleCell);
*/