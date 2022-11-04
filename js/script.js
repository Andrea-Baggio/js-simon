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
const eleRules = document.querySelector('.rules');
const eleBar = document.querySelector('.bar');

eleStartButton.addEventListener('click', startButton)

function startButton () {
    eleStartButton.classList.add('hidden');
    eleStartScreen.classList.add('hidden');
    eleRules.classList.remove('hidden');
    eleBar.classList.remove('hidden');
}
