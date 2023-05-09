//gestion de errores

const miFuncion = val =>{
    if (typeof val === "number"){
        return 2 * val
    } throw new Error("El valor debe ser un numero")
}   ///throw es el metodo para lanzar el error


//try{} catch(){} hacen que se intente lo primero ysi falla se lance el error

try{
console.log("Esta ejecutandose de forma correcta")
const doble = console.log(miFuncion())
} catch(e){
    //los errorers se pasan por console.error(e), con el parametro e se ejecuta en la consola el error que lanzamos con el throw 
console.error(e)
} finally{
    //esto se puede agregar para que se ejecute por defecto, tanto si hay error o no
 console.log("Bienvenido")
}

//se deve envolver el codigo con try y catch para controlar los errores

//errores comunes
// Internal Error (ploblemas internos como recursividad, que se llama a si misma la funcion infinita)

//sintaxError (error en fallo de sintaxis)

//TypeError(error en tipo de dato que espera el programa)

//RangeError (error de rango en posicion q estamos tratando de acceder en un array)

//referenceError (cuando tratamos de acceder a una variable que no existe)

//NODE JS

//npm init -y para iniciar el proyecto node y aceptar todo automaticamente