/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];





//let lunghezzaNomi = nomi.length

/*const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}*/

//const newNames = names.flatMap(name => [name.charAt(0)]) //--->The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

//console.log(newNames);

function initialLetter(names){
    const newNames = []; 

    for(let i = 0; i < names.length; i++){

        
        let firstLetter = names[i].charAt(0);
        newNames.push(firstLetter)
    }
   
    return newNames
} 
console.log(initialLetter(names));



   
   



// Dichiara la funzione qui.
/*functions initialLetter (array){

    

}
initialLetter()

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]*/