// console.log("Hola")

/* 
Esto
es 
un
bloque
*/

// var no usar casi nunca.

// let const  -> no se pueden declarar varios con el mismo nombre
//Scope general - ambito general

let name = "Byron";

console.log(name)

name = "Hades"

console.log(name)

// let se puede volver a declarar cambiando su contenido

console.log(name)

//AMBITO DE BLOQUE
if(true){
    //Scope de bloque - ambito de bloque
    //bloque de ejecucción
    let x = 10;
}

console.log(x);

const movie = "The evil dead"

// Una const no se puede volver a declarar.

// Tipos de datos en JS // 

// 1. String

const firstName = "Lolo dijo: '¡qué caro está todo!' ";  // 'también se puede escribir con estas comillas'

// 2. Number

const numero = 10 + 2.5;

// 3. Booleano

const booleano = false;

// 4. Array

const animales = ["Perro", "Gato", "Elefante", "Pájaro"] // Listado de elementos que tengan relacción entre si

// 5. Objeto

const botella = {
    marca: "Amazon",
    precio: 10,
    color: "Marrón",
    material: "Lata"
    variantes: ["Peppa pig", "Naruto"],
}

// 7. Null

let nulo = null;  // existe, pero no tiene un valor, se puede manipular. ROBERTO??

// 8. Undefined

const noDefinido = undefined; // no está definido, no tiene ningún valor.

