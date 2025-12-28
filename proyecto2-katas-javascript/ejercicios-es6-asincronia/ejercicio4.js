const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let mayores = ages.filter(age => age > 18)
console.log(mayores)


let pares = ages.filter(function(age) {
    return age % 2 == 0
})
console.log(pares)


const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lolPlayers = streamers.filter(s => s.gameMorePlayed == 'League of Legends')
console.log(lolPlayers)


let conU = streamers.filter(s => s.name.includes('u'))
console.log(conU)


let legendsStreamers = streamers.filter(s => s.gameMorePlayed.includes('Legends'))

let res = legendsStreamers.map(s => {
    if(s.age > 35) {
        return {...s, gameMorePlayed: s.gameMorePlayed.toUpperCase()}
    }
    return s
})
console.log(res)