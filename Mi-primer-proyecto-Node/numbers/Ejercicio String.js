// numbers
//declaracion de variables numericas
let a = 5;
let b = 0.1;

//precision, como se guardan en variables con bits y bites, nunca es 100% precisa, la suma de abajo en vez de dar 0.3, da 0.3000000000000004
let c = 0.2;

console.log(b + c)
//truco para redondear
console.log(Math.round((b + c)*100)/100)

//representacion de numeros en string
//typoof() te dice de que tipo es
console.log (typeof(a))

//convierte a string
let a_string = a.toString();
console.log(a_string)
console.log(typeof(a_string))

//redondeo

let d = 3.3;
let e = d * 3;
console.log(e)
//toFixed()  te redondea a los decimales que le pases por parametro, lo unico a tener en cuenta es que te pasa el valor a string
console.log(e.toFixed(2))

//toPrecision() limita el numero de cifras significativas, redondeando, tambien el valor es de string
console.log(e.toPrecision(3))

//operador .valueOf() obtener valores numericos a partir de literales
let f = new Number(3);
console.log(f)
console.log(a + f)
//esto es lo que hace siempre el sistema 
console.log(a.valueOf() + f.valueOf())
let str_ = new String("Hola soy david");
//te lop sa como itinerator
console.log(str_)
//con valueOf() te lo pasa como string normal
console.log(str_.valueOf())


//NaN infinity
let n = Number("Hola")
//devuelve not a number porque espera un numero
console.log(n)
//con esto podemos saber si es una variable numerica o no
console.log(isNaN(n))
let numerador = 19
let divisor = 0
let divisor2 = null
//cuando se divide por un numero muy chico nos pasa un infinito
console.log(numerador / divisor)
//tambien cuando se divide por un null
console.log(numerador / divisor2)


//convertir un string a number
let numero = "5.89"
let num2 = 17.2;
console.log(typeof(numero))
//si los queremos concatenar te toma todo como string
console.log(num2 + numero)
//se debe hacer asi con Number() para convertir el string a numero
console.log(Number(numero) + num2)

//parseInt() pasar a entero un numero decimal
console.log(parseInt(numero))
//me pasa el numero sin los decimales
//parseFloat() pasar a un numero decimal un entero
console.log(parseFloat(numero))


//numeros hexadecimales (en base 16)
let numHex = "0x3a5b7"
console.log(parseInt(numHex, 16))
//como tienen letras se deben convertir para luego trabajar con ellos, el 16 es la base

//obtener el valor max y min en javascript
let min_precision = Number.EPSILON;
let min_valorjs = Number.MIN_VALUE;
let max_valorjs = Number.MAX_VALUE;
//precision minima de memoria para pasar de un valor al siguiente
console.log(min_precision)//e-16 xq tiene 16 ceros antes
console.log(min_valorjs) 
console.log(max_valorjs)


