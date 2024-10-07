/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A";





// Dichiara la funzione qui.


function filterByLetter(words, letter) {
    const filteredWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            filteredWords.push(words[i]);
        }
    }

    return filteredWords;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filterByLetter(names, letter)); 

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]