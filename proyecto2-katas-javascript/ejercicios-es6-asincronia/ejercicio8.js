let select = document.getElementById('character-list')
let img = document.querySelector('.character-image')

let personajes = []

fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        personajes = data
        
        personajes.forEach(p => {
            let option = document.createElement('option')
            option.value = p.id
            option.textContent = p.fullName
            select.appendChild(option)
        })
        
        img.src = personajes[0].imageUrl
    })

select.addEventListener('change', function(e) {
    let elegido = personajes.find(p => p.id == e.target.value)
    img.src = elegido.imageUrl
})