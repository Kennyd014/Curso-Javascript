//Que son y como se declaran
saludar("david") 

function saludar (nombre) {
console.log(`Hola ${nombre}`)
}

//usar objetos como parametros, te cambia el objeto original si modificas el obj dentro de la funcion ATENCION!!

let persona = { nombre: "David", apellido: "Kenny"}
console.log(persona)
function saludarobj (objeto) {
    persona.apellido = "Piaggio"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarobj(persona)
console.log(persona) //el apellido se cambio a piaggio en el obj

//parametros opcionale, es un valor por defecto, si paso la funcion sin parametro me va aimprimir usuario
function inicioSesion (nombre = "Usuario") {
    console.log(`Bienvenido ${nombre}`)
}
inicioSesion()

//usando el factor de propagacion, va a pasar todos los parametros q le mandemos

function imprimir (...parametros){
    console.log(parametros)
}
imprimir(2,4,5,"hola")

//ej funcion para sumar todos los parametros, con return para que nos devuelva el valor
function suma(...nums){
    return(nums.reduce((a , b) => a + b))
    
}
let s = suma(3,4,5,)
console.log(s)

/// funciones de tipo flecha
//ej para devolver un el doble de un array
const array = [1,2,3,4,5,6]
const array2 = array.map((valor) => valor * 2)
console.log(array2)

const dobleValor = valor => valor * 2
console.log(dobleValor(2))
//mismo resultado que array2 pero usando la funcion dobleValor
const array3 = array.map(dobleValor)
console.log(array3)

//carga y sobrecarga de funciones
function sal(){
    hola()
}

function hola(){
    console.log("hola soy la funcion Hola()")
}
sal()
/// flow
// 1- global() [se llama a la funcion global]
// 2- saludar() global() [entra a saludar desde global]
// 3- Hola() saludar() global() [entra a hola, desde saludar y desde global]
// 4- saludar() global() [sale de hola y vuelve a saludar]
// 5- global() [sale de saludar y vuelve a global]

//nunca se puede llamar a una funcion en si misma xq daria un error por no tener fin de ejecucion EJ: function Hola(){Hola()}


//funciones asincronas y promesas, son funciones que hacen llamadas fuera de nuestro programa, ejemplo a base de datos y puede darnos un error
function miAsinc(){
    //hacer llamada a BD externa
    // puede devolver error
}
//se ahace mediante promesas
const miPromesa = new Promise((resolve, reject) => {
    const i =Math.floor(Math.random() * 2) //para que nos genere un numero random entre 0 y 1 para probar la funcion
    //si esta correcto
    if (i !== 0) {
        resolve();
    } else {
        reject()
    }
})

miPromesa 
    .then(()=>console.log("conectado")) //te ejecuta lo correcto
    .catch(()=> console.log("ERROR")) //te ejecuta el error
    .finally(()=> console.log("Me ejecuto siempre")) //se ejecuta seimpre

///Funciones generadoras
function* generarId(){
     let id = 0;
     while(true) {
        id++;
        if (id == 10) {
            return //sale de la funcion
        } 
        yield id //la funcion se va aquedar aca esperando otra llamada
     } 
}
const gen = generarId()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


