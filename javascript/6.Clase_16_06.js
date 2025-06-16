//Bucles

//Iterar elementos iterables

for(let i = 0; i < 4; i++) {
    console.log("hola", i);
}

//LANZAMOS EL SCRIPT
// i = 0, true, sumamos uno al final -> Hola 0
// i = 1, true, sumamos uno al final -> Hola 1
// i = 2, true, sumamos uno al final -> Hola 2
// i = 3, true, sumamos uno al final -> Hola 3
// i = 4, false -> Salimos del bucle

const movies = ["John Wick", "Nosferatu", "The Evil Dead", "Matrix", "Dracula"];

for(let i = 0; i < movies.length; i++){
    console.log(movies[i]);
}

//

const numbers = [5, 45, 67, 5, 43, 53, 5, 1, 7, 9, 90];

let counter = 0;

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
    console.log(number)
    counter += number;
    console.log(counter)
}

console.log(counter)

//FOR OF
for (const number of numbers) {
    console.log(number)
}

//FOR EACH
numbers.forEach((number, i) => {
    console.log(number);
});

const batman = {
    name: "Bruce",
    lastname: "Wayne",
    city: "Gotham",
};

for (const propiedad in batman) {
    console.log(batman[propiedad]);
}