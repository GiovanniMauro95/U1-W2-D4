/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  const areaRettangolo = l1 * l2
  console.log(areaRettangolo)
}
area(3, 6)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    return num1 + num2
  } else {
    return (num1 + num2) * 3
  }
}
console.log(crazySum(6, 6))
console.log(crazySum(9, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num3) {
  const difference = Math.abs(num3) - 19
  if (difference > 19) {
    return difference * 3
  } else {
    return difference
  }
}
console.log(crazyDiff(100))
console.log(crazyDiff(30))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return (n = true)
  } else {
    return (n = false)
  }
}
console.log(boundary(130))
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.startsWith("EPICODE")) {
    return str
  } else {
    return "EPICODE" + str
  }
}
console.log(epify("EPICODE" + ", benvenuto"))
console.log(epify(", registrati!"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num4) {
  if (num4 % 3 === 0 || num4 % 7 === 0) {
    return true
  } else {
    return false
  }
}
console.log(check3and7(15))
console.log(check3and7(70))
console.log(check3and7(16))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str2) {
  const arrayString = str2.split("")
  arrayString.reverse()
  const stringReverse = arrayString.join("")
  return stringReverse
}
console.log(reverseString("GIOVANNI"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

//

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string) {
  if (string.lenght <= 2) {
    return " "
  } else {
    return string.slice(1, -1)
  }
}
console.log(cutString("Benvenuto"))
console.log(cutString("Si"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (num5) {
  const randomNum = []
  for (i = 0; i < num5; i++) {
    const number = Math.floor(Math.random() * 11)
    randomNum.push(number)
  }
  return randomNum
}
console.log(giveMeRandom(4))
