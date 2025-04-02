/*
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer() {
  return function () {
    setTimeout(() => console.log("Tempo Scaduto"), 2000)
  }
}
