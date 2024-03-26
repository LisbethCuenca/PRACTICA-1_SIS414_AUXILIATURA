let arrayNumeros = [1, 2, 3, 4, 5];

// Método: push() 
arrayNumeros.push(6);
console.log("Después de push(6):", arrayNumeros);

// Método: pop() 
arrayNumeros.pop();
console.log("Después de pop():", arrayNumeros);

// Método: unshift() 
arrayNumeros.unshift(0);
console.log("Después de unshift(0):", arrayNumeros);

// Método: shift() 
arrayNumeros.shift();
console.log("Después de shift():", arrayNumeros);

// Método: splice() 
arrayNumeros.splice(2, 0, 3.5); 
console.log("Después de splice(2, 0, 3.5):", arrayNumeros);
arrayNumeros.splice(3, 1); 
console.log("Después de splice(3, 1):", arrayNumeros);

// Método: slice()
let subArray = arrayNumeros.slice(1, 4); 
console.log("Subarreglo:", subArray);

// Método: concat() 
let arrayNumeros2 = [6, 7, 8];
let arrayConcatenado = arrayNumeros.concat(arrayNumeros2);
console.log("Arreglos concatenados:", arrayConcatenado);

// Método: join() 
let cadenaNumeros = arrayNumeros.join(", ");
console.log("Cadena:", cadenaNumeros);

// Método: reverse() 
let arrayInvertido = arrayNumeros.reverse();
console.log("Numeros invertidos:", arrayInvertido);

// Método: sort() 
let arrayDesordenado = [5, 3, 8, 1, 4];
arrayDesordenado.sort();
console.log("Numeros ordenados:", arrayDesordenado);

// Método: map() 
let cuadrados = arrayNumeros.map(function(num) {
    return num * num;
});
console.log("Cuadrados:", cuadrados);

// Método: filter() 
let pares = arrayNumeros.filter(function(num) {
    return num % 2 === 0;
});
console.log("Pares:", pares);

// Método: reduce() 
let suma = arrayNumeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);
console.log("Suma:", suma);
