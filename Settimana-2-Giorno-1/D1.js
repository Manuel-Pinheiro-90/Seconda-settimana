/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
i tipi di Dati javaScript sono divisibili in due gruppi Primitivi e complessi.
i primitivi sono:
Number = number viene utilizzato per rappresentare valori numerici, inclusi numeri interi e decimali, questo valore si inserisce senza apici
Stringhe = una sequenza di caratteri inserito all'intero di singoli apici ''o di doppio apice ""
Booleani = ha due soli tipi di valore True/false e determina un azione differente in base alla sua condizione
null = ha solo questo valore ma risulta un dato esistente
undefined = non ha valore finche non gli viene assegnato  questo dato  è come se non esistesse

il valore complesso invece è rappresentato dagli Oggetti
Oggetti = strutture dati con caratteristiche complesse, si possono aggiungere proprietà e coppie attributo/valore
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/*var myName = 'Manuel'


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
var numero1 = 12
var numero2 = 20
var risultato = numero1+numero2 
console.log('risultato'+risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*const myName = 'Manuel'; // const rende manuel non modificabile
console.log("originale:", myName);

myName = 'Pinheiro'; // Tentativo di riassegnare myName

console.log("riassegnato:", myName);

//il tentativo fallisce


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
var risultato = 4 - x;
console.log("Il risultato  è:", risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*
var name1 = "jhon";
var name2 = "Jhon";

console.log(name1 !== name2 ? "name1  diverso da name2." : "name1  uguale a name2.");
*/

//EXTRA
var name1 = "john";
var name2 = "John";

console.log(name1.toLowerCase() === name2.toLowerCase() ? "Entrambe le variabili sono uguali  in lowercase." : "Le variabili non sono uguali quando convertite in lowercase.");