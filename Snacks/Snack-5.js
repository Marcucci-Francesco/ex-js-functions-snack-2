/*
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
*/

function stampaOgniSecondo(message) {
  return setInterval(() => console.log(message), 1000)
}

stampaOgniSecondo("Hello World")

setTimeout(() => clearInterval(stampaOgniSecondo), 5000);