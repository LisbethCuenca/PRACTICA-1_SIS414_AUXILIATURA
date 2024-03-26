function sumarNumeros(num) {
    let suma = 0;
    for (let numero of num) {
        suma += numero;
    }
    return suma;
}

let num = [2, 5, 1, 20];

console.log("La suma de los números es:", sumarNumeros(num));