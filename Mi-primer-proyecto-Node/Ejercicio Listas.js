//Ejercicios listas
let listaSuper = ["Leche","Carne", "Arroz", "Fideos", "tomate", "Queso", "Pan"]
listaSuper.push("Aceite de girasol")
listaSuper.pop()
const pelis_fav = [
    {nombre: "Aladdin", director: "Disney", año: 1998},
    {nombre: "Ted", director:"Mark Twin", año: 2013},
    {nombre: "Piratas del caribe", director: "Spilver", año: 2001}
]
const lista_nueva = pelis_fav.filter(obj => obj.año > 2010)
const lista_d = pelis_fav.map(peli =>peli.director)
const  lista_titulo = pelis_fav.map(peli => peli.nombre)
const  lista_concat = lista_d.concat(lista_titulo)
const lista_propag = [...lista_d, ...lista_titulo]


console.log(lista_propag)

