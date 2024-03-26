// Método: length
let mensaje = "Hola mundo";
console.log("Longitud del mensaje:", mensaje.length);

// Método: toUpperCase
console.log("maysculas:", mensaje.toUpperCase());

// Método: toLowerCase
console.log("minusculas:", mensaje.toLowerCase());

// Método: indexOf
console.log("Índice de la primera 'o' en el mensaje:", mensaje.indexOf('o'));

// Método: lastIndexOf
console.log("Índice de la última 'o' en el mensaje:", mensaje.lastIndexOf('o'));

// Método: slice
console.log("Parte del mensaje:", mensaje.slice(2, 5));

// Método: substring
console.log("Substring del mensaje:", mensaje.substring(2, 5));

// Método: replace
console.log("Mensaje reemplazando 'mundo' por 'JavaScript':", mensaje.replace('mundo', 'JavaScript'));

// Método: split
let palabras = "lista de palabras";
let palabrasArray = palabras.split(' ');
console.log("Array de palabras:", palabrasArray);

// Método: concat
let cadena1 = "Hola";
let cadena2 = "mundo";
console.log("cadenas concatenadas:", cadena1.concat(' ', cadena2));

// Método: trim
let espacios = "     Hola     ";
console.log("Cadena sin espacios en blanco al principio y al final:", espacios.trim());
