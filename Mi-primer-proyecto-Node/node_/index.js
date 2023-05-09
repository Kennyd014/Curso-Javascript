const miFuncion = val => {
    if (typeof val === "number")
    return 2 * val
    throw new Error("El valor debe ser un numero")
} 

const numero = 2
try{
    console.log("correcto")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e){
    
    console.log(e)
}
