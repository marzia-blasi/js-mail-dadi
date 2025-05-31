/* Mail
1 Crea una lista di email di invitati ad una festa. 
- array
2 Chiedi all’utente la sua email, 
- prompt
3 controlla che sia nella lista di chi può accedere, 
- servirà un === 
4 stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).*/

let list = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com"];

//let validation = prompt("mail");
//console.log(validation);

for (let i = 0; i < list.length; i++) {
  const mail = list[i]; // singolo elemento di list
  console.log(mail);
}

// if (validation === elemento di list); mi serve che i (del ciclo for, diventi ogni elemento di list)
// tutto ok
// else messaggio di alert non invitato

/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" 

- usare random (si può impostare da 1 a 6 - verificare )
- if random mio  >  di random tuo etc
 */

let utente = Math.floor(Math.random() * 6) + 1;
let pc = Math.floor(Math.random() * 6) + 1;

if (utente > pc) {
  console.log("ha vinto l'umanità");
} else if ((utente = pc)) {
  console.log("pareggio");
} else {
  console.log("l'era dei robot ha inizio!");
}
