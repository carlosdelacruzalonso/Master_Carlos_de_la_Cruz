// EJERCICIOS JAVASCRIPT // 

// 1. 

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const total = sable1.precio + sable2.precio;
console.log(total)

// 2.

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

precioBaseGlobal = 25000;

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1);
console.log(nave2)

// 3.

//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

console.log(aldeanos[3]);
aldeanos.push("Cervasio");
aldeanos[0] = "Bambina";
aldeanos.reverse();
console.log(aldeanos[aldeanos.length - 1])

// 4.

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (/* COMPLETAR */) {
  console.log("number3 es distinto number1");
}

if (/* COMPLETAR */) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (/* COMPLETAR */) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// 5. 

/* 
Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'. */

for(let i = 0; i < 10; i++){
    if(i !== 9){
        console.log("Intentando dormir 🐑" + i);
    } else {
        console.log("¡Dormido!");
    }
}

// 6.

/*
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];


function findLongestWord(stringList) {
 let longestWord = ""; 

    for (const avenger of stringList) {
        if(avenger.length > longestWord.length){
            longestWord = avenger;
        }
    }

    console.log(longestWord)
}

findLongestWord(avengers);