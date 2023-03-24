//como trabajar con listas(arrays, arreglos, vectores)
let varia_ = 45;
let array = [1, "hola", false, {id : 4}, null, undefined, varia_ ]
//acceder a los valores de un array
console.log(array[4])


//Metodos para introducir valores en array, estos mutan el valor del array
//.push() mete valores al final
array.push("chau", 47, {pepa: true})
console.log(array)  

//.unshift() para meter valores al principio
array.unshift("inicio", true)
console.log(array)

//Metordos para eliminar valores en array, tambien mutan el valor del array
//.pop() elimina valores al final
array.pop()
console.log(array)

//.shift() elimina el primer valor
array.shift()
console.log(array)

//metodo para eliminar, modificar, añadir valores
//.splice(x,y,z)
array.splice(2,3) //primer parametro la posicion desde donde elimina, segundo lacantidad de valores a eliminar
console.log(array)
//añadir valores
array.splice(2,0,"añadido") // 1er parametro desde que posicion comienza, segundo 0 xq no eliminaremos ningun parametro, 3ro el/los parametro a agregar
console.log(array)

//modificar valores con splice
array.splice(6,1, "nuevo") //1er parametro la posicion, 2do 1 xq eliminara un valor, 3ro el nuevo valor que ira a la posicion 6
console.log(array)


//como unir 2 listas
//.concat(lista2) no modifica el valor original de las listas, se debe guardar en una nueva lista

const lista1 = ["hola", 34, true];
const lista2 = [ "chau", 43, false];
console.log(lista1.concat(lista2))
const lista3 = lista1.concat(lista2)
console.log(lista3)

//unir 2 arrays con el factor de propagacion, se le agrega ... antes del nombre de la lista
console.log(...lista3)
const lista4 = [...lista1,...lista2]
console.log(lista4)

//obtener una lista a partir de otra lista
//.slice() nos devuelve una porcion se le pasa el inicio y la cantidad de indices
const array2 = ["pepe", 4, null, true, 323]
const array3 = array2.slice(1,4) // se puede hacer tambien (1,-1) y va aser el mismo resultado
console.log(array3)

//iterar valones en una lista

const array4 = [1,2,3,4,5,6]
//forma antigua
for (let i = 0; i < array4.length; i++ ){
    console.log(i)
}
//forma S6 mas eficiente

let suma = 0;
array4.forEach(valor =>  {
    suma += valor
    console.log(valor)
})
console.log(suma)

//busqueda de un valor dentro de un array  .find()
const variable = array4.find(valor => {
    
    if (valor === 5){
        return true
    }
})
console.log(variable)

const listaObj = [
    {nombre: "miguel", edad: 35},
    {nombre: "juan", edad: 45},
    {nombre: "pedro", edad: 54},
    {nombre: "lucia", edad: 14}
]
//forma larga
/*const objetos = listaObj.find(o =>{
        if(o.nombre === "pedro"){
            return  true
        }
}) */
//forma corta
const objetos = listaObj.find( o=>o.nombre === "pedro");
const {edad} = listaObj.find( o=> o.nombre === "lucia");
console.log(objetos)
console.log(edad)

//metodos avanzados
//.map() se puede recorrer el array y agregarle un valor y un parametro indice a todo el array
const ciudades = ["Madrid", "Barcelona", "Roma", "Napoles"]

const nuevoArray = ciudades.map((valor,indice)=> `${indice + 1}  ${valor}`)
console.log(nuevoArray)

//filter()
//forma larga
/*const personasMayores = listaObj.filter( obj => {
    if (obj.edad > 18) {
        return true
    } else {
        return false
    };
}*/
//forma corta
const personasMayores = listaObj.filter(obj => obj.edad > 18)
console.log(personasMayores)
//para que no nos devuelva un obj especifico:
const nuevaLista = listaObj.filter(obj => obj.nombre !== "miguel")
console.log(nuevaLista)

//.reduce((acumulado, actual, indice, arrayoriginal)) para obtener un valor a partir de una lista
const valores2 = [3, 56, 23, 5, 90, 100]
const sumatoria = valores2.reduce((acu,act,ind,arr) =>{
    console.log(acu)
    console.log(act)
    console.log(ind)
    console.log(arr)
    return acu + act
})
console.log(sumatoria)


//.sort() para ordenar listas

const arrayNum = [45,787,1,97,23,12,56,325]

arrayNum.sort((a ,b ) =>{
    if (a<b){
        return -1
        

    }else if( a>b){
        return +1

    }else { 
        return 0
    }
})
console.log(arrayNum)

//forma mas sencilla para ordenar valores solo numericos
const arrayNum2 = [45,76,13,878,98, -13, -34]
//siempre el a va aser menor que b y lo va ameter a la izq, si invertimos b - a lo va a ordenar al reves
arrayNum2.sort((a, b) => a - b)
console.log(arrayNum2)

//con arrays de objetos ordenar por edad
listaObj.sort((a, b) => a.edad - b.edad)
console.log(listaObj)

//comparar listas
//.every()
let resultado2 = arrayNum2.every(valor => typeof valor === "number")
console.log(resultado2)

//comparar listas, creando una funcion. si ar_1 y ar_2 no tienen el mismo tamaño, ya te lo saca a false, si no va acompara cada uno de los indices entre si
const compararArray = (ar_1, ar_2) =>{
    if(ar_1.length !== ar_2.length) return false
    const res = ar_1.every((valor, i) => valor === ar_2[i])
    return res    
}
console.log(compararArray(array3, array2))

//para saber si alguno de los elementos de la lista cumple una condicion
//.some()
const resultado3 = arrayNum2.some(valor => valor === 13)
console.log(resultado3)

const resultado4 = listaObj.some(persona => persona.nombre === "miguel")
console.log(resultado4)

//obtener una lista a partir de un objeto iterable, te convierte el string en una lista con Array.from()
const str = "Hola como andas vos"

const ar_str = Array.from(str)
console.log(ar_str)

//para crear un array con los indices del array original se usa .keys()
const keys = arrayNum2.keys()
//ya devuelve un iterador
console.log(keys)
const ar_keys = Array.from(keys)
//devuelve los indices del array original
console.log(ar_keys)