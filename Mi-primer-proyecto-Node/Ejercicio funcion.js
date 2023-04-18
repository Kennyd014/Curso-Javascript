//Ejercicio Funciones
function siempreTrue() {
    return true
}

function saludo(){ 
    console.log("Hola soy una promesa");
}
setTimeout(saludo, 5000)


function* generaID(){
    let id = -2
    while(true){
        id = id + 2;
        if (id == 100){
            return
        }
        yield id
    } 
}
let gen = generaID()
console.log(gen.next().value)
console.log(siempreTrue())