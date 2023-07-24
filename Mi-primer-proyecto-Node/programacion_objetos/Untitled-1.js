//creacion de clases, un objeto de clase persona
//las variables dentro de un obj se llamas atributos, y las funciones metodos
class Persona {
    // si se le agrega # se convierten en atributos privados, tambien se puede hacer con los metodos
    #nombre;
    #edad;
    //protegida se le agrega _
    _isDeveloper;
    //metodo constructor, instancia la clase
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre; //el this. hace referencia al obj donde se encuetra
        this.#edad = edad;
        this._isDeveloper = isDeveloper;
        
    }
    saludo(){
        console.log(`Hola mi nombre es ${this.#nombre} y tengo ${this.#edad} años`)
    }
    //getter
    getEdad(){
        return this.#edad 
    }
    //setter
    setEdad(nuevaEdad){
        this.#edad =nuevaEdad
        return this.#edad
    }
}

//crear un nuevo objeto
const persona4 = new Persona("Sol", 24, true)
console.log(persona4)
//llamamos a la funcion dentro del obj
persona4.saludo()

let numero = 60; //inicializar una variable
let persona2 = new Persona ("maria",35,false) //instanciar

//instanceof  se utiliza de forma similar al typeof, si es una classe es true
console.log(persona4 instanceof Persona)

//privada llevan #. solo se puede acceder desde dentro de la clase
//protegidas llevan _ . solo se puede acceder desde dentro de la clase y desde clases decedientes

//getters y Setters
//getters : son metodos que nos permiten obtener atributos privados o protegidos. EJ getEdad, metodo que creamos dentro la clase y nos permite acceder a el atrivuto fuera de la clase
const edad = persona4.getEdad()
console.log(edad)
//Setters: son metodos que nos permiten cambiar el valor de un atrivuto privado o protegido
persona4.setEdad(26)
console.log(persona4.getEdad())


//herencia y polimorfismo


//herencia
///se agrega extends para heredar de persona
class Desarrollador extends Persona {
        //se puede agregar un atributo por ej lenguaje a la persona q tambien es desarrollador
        constructor(nombre, edad, isDeveloper, lenguaje){
           // super nos permite llamar a los atributos del constructor padre
            super(nombre, edad, isDeveloper);
            this.lenguaje = lenguaje
            
        }
        saludo() {
            super.saludo()
            console.log(`y soy desarrollador de ${this.lenguaje}`)
        }
}
const nuevodev = new Desarrollador("Juan", 32, true, "JS" )
console.log(nuevodev)
nuevodev.saludo()