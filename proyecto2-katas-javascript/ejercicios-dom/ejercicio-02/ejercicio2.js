let div1 = document.createElement('div');
document.body.appendChild(div1);

const nuevoDiv = document.createElement('div');
let p = document.createElement('p');
nuevoDiv.appendChild(p);
document.body.appendChild(nuevoDiv);

const divConP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  let parrafo = document.createElement('p');
  divConP.appendChild(parrafo);
}
document.body.appendChild(divConP);

let pNuevo = document.createElement('p');
pNuevo.textContent = 'Soy dinámico!';
document.body.appendChild(pNuevo);

let titulo = document.querySelector('.fn-insert-here');
titulo.textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
  const item = document.createElement('li');
  item.textContent = apps[i];
  lista.appendChild(item);
}
document.body.appendChild(lista);

let aEliminar = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < aEliminar.length; i++) {
  aEliminar[i].remove();
}

const todosLosDivs = document.querySelectorAll('div');
let pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
todosLosDivs[1].insertAdjacentElement('beforebegin', pMedio);

let divsInsertar = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < divsInsertar.length; i++) {
  const parrafoNuevo = document.createElement('p');
  parrafoNuevo.textContent = 'Voy dentro!';
  divsInsertar[i].appendChild(parrafoNuevo);
}