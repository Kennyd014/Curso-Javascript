const fechaHoy = new Date()
const fechaNac = new Date("March 5, 1991")
let fechaMenor = fechaHoy > fechaNac
let diaNac = fechaNac.getDate()
let mesNac = fechaNac.getMonth() +1 
let anioNac = fechaNac.getFullYear()

console.log(anioNac)