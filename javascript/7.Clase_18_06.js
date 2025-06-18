//Funciones

function saludar () {
    const texto = "Hola";
    console.log (texto);
}

saludar();

// 

function saludarConNombre (nombre) {
    const texto = "Hola " + nombre;
    console.log(texto);
}

saludarConNombre("Tontito");
saludarConNombre("Carlos");

//

function sumarDosNumeros (numeroA, numeroB) {
    const total = numeroA + numeroB;
    console.log("El total de " + numeroA + " más " + numeroB + " es: " + total);
}

sumarDosNumeros(5,6)

//

function calcularElDoble (numero) {
    const total = numero * 2;
    return total;
}

const totalDe6Por2 = calcularElDoble(6);
console.log(totalDe6Por2);

//

function guardiaDeSeguridad (edad) {
    if(typeof edad !== "number") {
        console.log("No es un número")
        return
    }

    console.log("Hola") // -> No se muestra por que termina la funcion antes
}

guardiaDeSeguridad("Hola")

//

function calcularEdad (nombre, añoNacimiento, añoActual = 2025) {
    const edad = añoActual - añoNacimiento;
    console.log(nombre + " tiene " + edad + " años");
}

calcularEdad("Carlos", 1999);


function calcularEdad (usuario) {
    const edad = (usuario.añoActual || 2025)- usuario.añoNacimiento;
    console.log(usuario.nombre + " tiene " + edad + " años");
}


const Carlos = {
    añoNacimiento: 1999,
    añoActual: 2025,
    nombre: "Carlos"
}

calcularEdad(Carlos)

// ARROW FUNCTIONS

const saludadorConNombre = (nombre) => {
    return "Hola " + nombre;
};

