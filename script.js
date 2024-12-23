/*Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: Non è necessario provvedere alla validazione delle email.*/


//Crea una lista di email di invitati ad una festa.
const listaInvitati = [
    "laura@gmail.com",
    "andrea@gmail.com",
    "alessandro@gmail.com",
    "pietro@gmail.com"
];

//Chiedi all’utente la sua email.
const emailUtente = prompt("Inserisci la tua email");

//verifica se l'utente è nella lista.
let utenteInvitato = false;

//ciclo for per verificare se l'email è presente nella lista.
for (let i = 0; i < listaInvitati.length; i++) {
    if (listaInvitati[i] === emailUtente) {
        utenteInvitato = true;
        break;   //ferma il ciclo for se l'email è stata trovata.
    } 
}

if (utenteInvitato) {
    console.log("Benvenuto");
} else {
    console.log("Ci dispiace, non sei stato invitato");
}