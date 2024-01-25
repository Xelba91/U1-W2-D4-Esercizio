/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  const result = l1 * l2;
  return result;
}
base = 5;
altezza = 8;

console.log(`Esercizio 1: L'area del rettangolo con base ${base} e altezza ${altezza}  è:`, area(base, altezza));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

console.log("Esercizio 2:", crazySum(5, 3));
console.log("Esercizio 2:", crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
}
console.log("Esercizio 3:", crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
let num3 = 15;
let num4 = 36;
let num5 = 400;
console.log("Esercizio 4: ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.");
console.log(num3, boundary(num3));
console.log(num4, boundary(num4));
console.log(num5, boundary(num5));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

console.log("Esercizio 5: ", epify("Ciao"));
console.log("Esercizio 5: ", epify("EPICODEISTHEBEST"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
let num8 = 0;
let num9 = 3;
let num10 = 113;
console.log(`Esercizio 6: ${num8} è multiplo di 3 o di 7?`, check3and7(num8));
console.log(`Esercizio 6: ${num9} è multiplo di 3 o di 7?`, check3and7(num9));
console.log(`Esercizio 6: ${num10} è multiplo di 3 o di 7?`, check3and7(num10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  return str.split("").reverse().join("");
}
let myStr = "Alessandro";
console.log(`Esercizio 7: Invertire ${myStr} RISULTATO:`, reverseString(myStr));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let parole = str.split(" ");
  let stringaFinale = [];
  for (let i = 0; i < parole.length; i++) {
    let primaLettera = parole[i].charAt(0);
    let PrimaLetteraGrande = primaLettera.toUpperCase();
    let paroleTagliate = parole[i].slice(1);
    let ParolaFinale = PrimaLetteraGrande + paroleTagliate;
    stringaFinale.push(ParolaFinale);
  }
  return stringaFinale.join(" ");
}

console.log(`Esercizio 8:`, upperFirst("ciao sono alessandro"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  //primo parametro dove deve inziare secondo parametro dove deve finire. str.length -1 la sua lunghezza - 1 come richiede l'esericizio
  return str.slice(1, str.length - 1);
}
let stringa = "alessandro";
console.log(`Esercizio 9: risultato di ${stringa} è `, cutString(stringa));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
console.log(`Esercizio 10:`, giveMeRandom(6));
