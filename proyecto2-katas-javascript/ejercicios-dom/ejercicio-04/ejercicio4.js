let boton = document.createElement('button');
boton.id = 'btnToClick';
boton.textContent = 'Click me';
document.body.appendChild(boton);

boton.addEventListener('click', function(event) {
  console.log(event);
});

let input1 = document.querySelector('.focus');
input1.addEventListener('focus', function() {
  console.log(input1.value);
});

const input2 = document.querySelector('.value');
input2.addEventListener('input', function() {
  console.log(input2.value);
});