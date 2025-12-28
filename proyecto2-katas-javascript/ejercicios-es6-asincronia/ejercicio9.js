let img = document.querySelector('.random-image')

let randomNum = Math.floor(Math.random() * 151) + 1

fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum)
    .then(res => res.json())
    .then(data => {
        img.src = data.sprites.other['official-artwork'].front_default
    })