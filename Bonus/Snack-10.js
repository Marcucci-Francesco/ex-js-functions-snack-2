/*
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

function creaThrottler(fn, time) {
  let lastEsecution = 0
  return function (...args) {
    const hour = Date.now();

    if (hour - lastEsecution >= time) {
      lastEsecution = hour;
      return fn(...args);
    } else {
      console.log('Non posso eseguire la funzione');
    }
  }
}