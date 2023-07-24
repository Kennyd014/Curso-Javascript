//objeto normal

const persona = {
    nombre:"David",
    edad: 32,
    isDeveloper: true,
    saludo: function() {
        console.log("hola")
    }

}

console.log(persona)

const persona2 = {
    nombre: "Juan",
    edad: 17,
    isDeveloper: false,
}

//para que no sea tedioso la creacion de cada objeto hacemos una funcion
//function factory
const crearPersona = (nombre,edad,isDeveloper) => {
    return { 
        nombre, //esto es igual a poner nombre: nombre
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hola")
        }

    }
}
//ya podemos crear un objeto mas simplificado
const persona3 = crearPersona("Mario", 23, false)
console.log(persona3)