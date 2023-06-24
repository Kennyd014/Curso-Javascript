//modulos es la forma de reutilizar codigo, se debe crear un archivo con funciones y exportar e importar para todo nuestro codigo

//formas de importar y exportar

//1- common JS- requiere


//2- Import ES6- import

//const moduloMatematica = require("./funciones/matematicas.js")
//console.log(moduloMatematica.factorial)
const { factorial, suma, eleva, multiplica  } = require("./funciones/matematicas.js")

//const fact = factorial(6);
//console.log(fact);
//const ele = eleva(4,2)
//console.log(ele)
//console.log(suma)
//const { lala } = require("./funciones/lalala.js")
const { lala } = require("./funciones/lalala")

lala(9,3)