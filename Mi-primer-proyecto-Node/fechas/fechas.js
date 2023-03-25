//fechas

const fecha = new Date()
console.log(fecha)

let fecha2 = new Date(1991,2, 5, 8, 30, 25 )
console.log(fecha2)

//podemos poner fecha con milisegundos, si los ponemos en negativo va a restar desde la fecha base que es 1970
const fecha3 = new Date(-930992343543)
console.log(fecha3)

//fechas a traves de string
let fecha4 = new Date("october 13, 1879, 12:15:14")
console.log(fecha4)

//comparar fechas, se debe hacer con milisegundos
console.log(fecha > fecha2)
//para comparar igualda entre fechas
console.log(fecha2.getTime() === fecha4.getTime())

//obtener el mes, el dia y el año de una fecha
console.log(fecha2.getDay())
//con get month hay que sumar +1 porque cuenta desde el cero
console.log(fecha3.getMonth() +1 )
console.log(fecha.getFullYear())

//para pasar la fecha a un string, se le pasa el Locale que es el idioma
//.toLocaleDateString()
console.log(fecha2.toLocaleDateString("en-US"))