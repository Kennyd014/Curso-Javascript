const obj = {nombre:"David", apellido: "Kenny", edad: 32, altura: 1.76, eresDesarrolador: true}
let buscaEdad = obj.edad
const listaObj = [
    obj,
    {nombre: "Thomas", apellido: "Carbery", edad: 31, altura: 1.75, eresDesarrolador: false},
    {nombre: "Juan", apellido: "Repetto", edad: 32, altura: 1.85, eresDesarrolador: false}
]
 const listaOrd = listaObj.sort((a,b) => a.edad - b.edad) 
console.log(listaOrd)

