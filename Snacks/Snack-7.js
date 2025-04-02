/*
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiFerma(message, start, stop) {
  let interval = setInterval(() => console.log(message), start);
  setTimeout(() => clearInterval(interval), stop);
}