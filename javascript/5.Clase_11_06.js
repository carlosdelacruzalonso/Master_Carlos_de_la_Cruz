//Arrays

const colores = ["rojo", "amarillo", "verde", "azul"];

//ACCEDE
//POSICIONES --> INDICES --> INDEX
console.log(colores[1])  --> amarillo
colores[0]  --> rojo

//LONGITUD
console.log(colores.length); //GO TO HELL

//SOBRESCRIBIR VALORES LLAMANDO A SUS POSICIONES
colores[0] = "negro"; --> modificamos el contenido del array
console.log(colores)

//METODOS QUE MODIFICAN EL ARRAY ORIGINAL
colores.push("blanco", "rojo");  --> añadimos al final del array
console.log(colores)

console.pop();  --> elimina el ultimo elemento del array (rojo en este caso)
console.log(colores)

colores.unshift("morado"); --> añadimos al principio del array
console.log(colores)

colores.shift();  --> elimina el primer elemento del array (morado en este caso)
console.log(colores)

colores.sort(); --> ordena por orden alfabetico
console.log(colores)

colores.reverse(); --> lo ordena al reverse
console.log(colores)

colores.splice(1, 3, "rosa") --> elimina elementos en un array, recibe dos argumentos y opcionamente 3 o más (en este caso borras desde la posición 1 hasta los que quieras eliminar. Además, "rosa" se añade donde se elimina el primer elemento)
console.log(colores)

//METODOS DE CONSULTA
console.log(colores.indexOf("amarillo"));  --> te dice la posicion dentro del array, en este caso, 2. --> si pones algo que no está dentro del array te devolverá un -1.

console.log(colores.includes("rojo"));  --> te da true o false si el elemento está en el array

console.log(colores.slice(2, 4));  --> eliges donde empiezas a cortar y donde acabas sin incluirlo. 

const juegosRetro = ["Mario Bros", "Tetris", "Arkanoid"];
const juegosNuevos = ["Elden Ring", "Death Stranding"];
const juegos = juegosRetro.concat(juegosNuevos);

// Ejemplo -> eliminar "Elden ring"
const eldenRingPos = juegos.indexOf("Elden Ring");
juegos.splice(eldenRingPos, 1);
console.log(juegos);

