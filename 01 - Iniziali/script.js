/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const newNames = names.flatMap(name => [name.charAt(0)])

console.log(newNames);



//let lunghezzaNomi = nomi.length

/*const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}*/
let initialName = []
function initialLetter(){
    
   
    

    for (i = 0; 0 < names.lenght; i--){
    let firstLetter = names[i].charAt(0);
    initialName.push()
    return initialName;
    }
   
} console.log(initialLetter(initialName));



   
   



// Dichiara la funzione qui.
/*functions initialLetter (array){

    

}
initialLetter()

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]*/