/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA *
/////////////////////////////////////////////////////////////////////////////
/*let num1 = 1;
let num2 =3 ;

if (num1> num2) {console.log(" 1 maggiore diu 2")} else {console.log(" numero 2 maggiore di 1")}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let numeronon = 6;
if (numeronon!==5){console.log("not equal");}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero = 20;
  if (numero % 5 === 0) {
      console.log("divisibile per 5");
  }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let numero1 = 5;
let numero2 = 3;

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
    console.log(" uno dei numeri è 8 o comunque la loro somma/sottrazione è 8.");
} else {
    console.log("Nessuna specifica è soddisfatta.");}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 60; 

let costoSpedizione = 10; 
let sogliaSpedizione = 50; 

let totaleSpesa;

if (totalShoppingCart > sogliaSpedizione) { totaleSpesa = totalShoppingCart; console.log("hai diritto allo sconto spedizione")} 
else { totaleSpesa = totalShoppingCart + costoSpedizione; console.log("PAGA!")}
console.log("Totale da addebitare all'utente per il checkout: " + totaleSpesa);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let totalShoppingCart = 60; 
let costoSpedizione = 10; 
let sogliaSpedizione = 50; 

let scontoBlackFriday = 0.2; 

let totaleSpesa;


if (totalShoppingCart > sogliaSpedizione) {totaleSpesa = totalShoppingCart; console.log("Hai diritto alla spedizione gratuita.");} 
    
else { totaleSpesa = totalShoppingCart + costoSpedizione; console.log("Devi pagare il costo di spedizione.");}

totaleSpesa = totaleSpesa - (totaleSpesa * scontoBlackFriday);

console.log("Totale da addebitare all'utente per il checkout: " + totaleSpesa.toFixed(2)); //tofixed(2) appunto mio "arrotonda la cifra del risultato dello sconto"

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// esercizio 7 non farina del mio sacco
let num1 = 10;
let num2 = 5;
let num3 = 7;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else {
    if (num1 > num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/*
let Prova = 32; 

if (typeof Prova === 'number') {
    console.log("Il valore  è un numero.");
} else {
    console.log("Il valore  non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/*
let numero = 4; 

if (numero % 2 === 0) {
    console.log(numero + " è pari.");
} else {
    console.log(numero + " è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
/*
  let val = 7
  if (val < 10) {console.log("Meno di 10");} else if (val < 5) {console.log("Meno di 5");} else {console.log("Uguale a 10 o maggiore");
    }



/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = 7;

if (val < 5) {console.log("Meno di 5");} else if (val < 10) {console.log("Maggiore o uguale a 5 e minore di 10");} else {console.log("Maggiore o uguale a 10");}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me.lastName;

console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.skills.pop()  
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero = [];

numero.push(1,2,3 ,4, 5, 6, 7, 8, 9, 10)
  

console.log(numero);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeri.pop();
numeri.push(100);
console.log(numeri);
*/