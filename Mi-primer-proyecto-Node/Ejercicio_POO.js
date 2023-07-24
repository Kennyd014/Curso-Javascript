class Estudiante {
    constructor(nombre,asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }
    obtenDatos(){
        return this.asignaturas
                

}
}
const nuevoEst = new Estudiante("mario", ["JS", "HTML", "CSS"])
nuevoEst.obtenDatos();
console.log(nuevoEst)