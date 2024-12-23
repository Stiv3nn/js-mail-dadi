//DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Generare un numero random da 1 a 6, GIOCATORE.
const player = Math.floor(Math.random() * 6) + 1;

//Generare un numero random da 1 a 6, COMPUTER.
const computer = Math.floor(Math.random() * 6) + 1;

console.log("Risultato del giocatore:", player);
console.log("Risultato del computer:", computer);

//Stabilire il vinicitore
if (player > computer) {
    console.log("Il giocatore ha vinto!"); 
}   else if (computer > player) {
    console.log("Il computer ha vinto!");
}   else {
    console.log("Pareggio!");
}
