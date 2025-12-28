const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let lista = document.createElement('ul');
for (let i = 0; i < albums.length; i++) {
  let item = document.createElement('li');
  item.textContent = albums[i];
  lista.appendChild(item);
}
document.body.appendChild(lista);