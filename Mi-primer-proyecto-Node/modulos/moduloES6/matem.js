export function suma(a, b) {
    return a + b
} 

export function multiplica(a, b){
    return a * b
}
//para elevar un numero
export function eleva(a, b) {
    return a ** b
}

export function factorial(a){
    //factorial de 5 = 5*4,5*3,5*2,5*1
    let factorial = 1;
    for(let i=1; i<= a; i++) {
        factorial *= i;
    }
        return factorial;
}