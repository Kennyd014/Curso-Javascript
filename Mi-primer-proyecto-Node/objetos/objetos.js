//objetos

const obj = {
    id: 4,
    nombre: "juan",
    apellido: "perez",
    isDeveloper: true,
    libreos_favoritos: ["el metodo", "el codigo", "el gato"],
    "4-juegos": [1,2,3,4]
}
console.log(obj.nombre)
//cuando ponemos propiedades entre"" (porque hay nombres de propiedades que solo te permiten asi), debemos acceder a ellas con obj[propiedad], no con obj.propiedad
console.log(obj["4-juegos"])

//acceder a propiedades a traves de variables
const prop = "isDeveloper"
console.log(obj[prop])

//para duplicar objetos se hace con propagacion, para que no se reemplace el obj original en el espacio de memoria
const obj2 = {...obj}

//como ordenar lista de obj en fncion de una propiedad
const listaPelicula = [
    {titulo: "lo que el viento se llevo", anio: 1939},
    {titulo: "titanic", anio:1997},
    {titulo:"moana", anio:2010}, 
    {titulo:"el efecto mariposa", anio:2004},

]
//.sort() para ordenar, muta el array original
listaPelicula.sort((a,b) =>a.anio - b.anio)

console.log(listaPelicula)
//<

