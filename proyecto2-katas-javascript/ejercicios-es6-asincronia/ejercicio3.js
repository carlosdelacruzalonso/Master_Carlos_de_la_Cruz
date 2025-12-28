const users = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
];

let nombres = users.map(function(user) {
    return user.name
})
console.log(nombres)


const users2 = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
];

let nombresAnacleto = users2.map(function(u) {
    if(u.name.startsWith('A')) {
        return 'Anacleto'
    }
    return u.name
})
console.log(nombresAnacleto)


const cities = [
    {isVisited:true, name: 'Tokyo'},
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'},
    {isVisited:false, name: 'Seul'}
];

let ciudades = cities.map(c => {
    if(c.isVisited == true) {
        return c.name + ' (Visitado)'
    }
    return c.name
})
console.log(ciudades)