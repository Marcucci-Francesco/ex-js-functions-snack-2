/*
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

function contoAllaRovescia(n) {

  const counter = n;

  const timer = setInterval(() => {
    if (counter === 0) {
      console.log("Tempo Scaduto");
      clearInterval(timer);
    } else {
      console.log(n);
      counter--;
    }
  }, 1000)
}

