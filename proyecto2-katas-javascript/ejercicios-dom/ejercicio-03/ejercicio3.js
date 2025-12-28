const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul = document.createElement('ul');
for (let i = 0; i < countries.length; i++) {
  let li = document.createElement('li');
  li.textContent = countries[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);

let elemento = document.querySelector('.fn-remove-me');
elemento.remove();

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let contenedor = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement('ul');
for (let i = 0; i < cars.length; i++) {
  let item = document.createElement('li');
  item.textContent = cars[i];
  listaCoches.appendChild(item);
}
contenedor.appendChild(listaCoches);

const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countries2.length; i++) {
  let div = document.createElement('div');
  let titulo = document.createElement('h4');
  let imagen = document.createElement('img');
  
  titulo.textContent = countries2[i].title;
  imagen.src = countries2[i].imgUrl;
  
  div.appendChild(titulo);
  div.appendChild(imagen);
  document.body.appendChild(div);
}

let btn = document.createElement('button');
btn.textContent = 'Eliminar último';
document.body.appendChild(btn);

btn.addEventListener('click', function() {
  let divs = document.querySelectorAll('div');
  if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});

const todosDivs = document.querySelectorAll('div');
for (let i = 0; i < todosDivs.length; i++) {
  let boton = document.createElement('button');
  boton.textContent = 'Eliminar';
  todosDivs[i].appendChild(boton);
  
  boton.addEventListener('click', function() {
    todosDivs[i].remove();
  });
}