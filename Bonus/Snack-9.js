/*
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

function sequenzaOperazioni(operations, time) {
  operations.forEach((operation, i) => {
    setTimeout(() => {
      operation();
    }, time * i)
  })
}