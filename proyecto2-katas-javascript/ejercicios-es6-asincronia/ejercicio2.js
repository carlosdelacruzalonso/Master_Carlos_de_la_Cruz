const pointsList = [32, 54, 21, 64, 75, 43]
let copia = [...pointsList]
console.log(copia)


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopia = {...toy}
console.log(toyCopia)


const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

let todosLosPuntos = [...pointsList1, ...pointsList2]
console.log(todosLosPuntos)


const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let toyJuntado = {...toy2, ...toyUpdate}
console.log(toyJuntado)


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let sinAmarillo = [...colors.slice(0,2), ...colors.slice(3)]
console.log(sinAmarillo)
console.log(colors)