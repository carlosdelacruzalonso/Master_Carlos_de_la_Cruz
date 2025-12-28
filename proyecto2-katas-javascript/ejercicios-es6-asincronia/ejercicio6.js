const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let suma = exams.reduce((acc, exam) => acc + exam.score, 0)
console.log(suma)


let aprobados = exams.filter(e => e.score >= 5)
console.log(aprobados)
let sumaAprobados = aprobados.reduce((acc, e) => acc + e.score, 0)
console.log(sumaAprobados)


let total = exams.reduce((acc, e) => acc + e.score, 0)
let media = total / exams.length
console.log(media)