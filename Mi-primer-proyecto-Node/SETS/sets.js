// Sets o conjuntos, son valores unicos a diferencia del array, no tiene repetidos en el mismo set, solo con los obj que no se consideras los mismos aunque tengan el mismo valor y argumentos, en una bd no se duplicarian los datos
const array = [1,2,3,4,5]
const nuevoSet = new Set(array)

//.add() para añadir valores
nuevoSet.add("hola")

//.delete() para eliminar valores
nuevoSet.delete("hola")

//.clear() elimina todos los valores del set
//nuevoSet.clear()

//.has() para saber si tiene un valor, true o false
console.log(nuevoSet.has(3)) 

//.size para saber el tamaño del set
console.log(nuevoSet.size)

//para recorrerlo
nuevoSet.forEach(element => {
    element
    console.log(element)
});

//para obtener los valores de ese foreach hay 2 opciones
    //con .values()
    const it_set = nuevoSet.values()
    console.log(it_set)

    //con el valor de propagacion
    const ar_set = [...nuevoSet]
    console.log(ar_set)

console.log(array)
console.log(nuevoSet)
