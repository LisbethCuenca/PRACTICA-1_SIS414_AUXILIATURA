let variableExterna = "Variable externa";

function miFuncion() {
    let variableInterna = "Variable interna";

    console.log("Dentro de la función - Variable interna:", variableInterna);

    console.log("Dentro de la función - Variable externa:", variableExterna);
}

console.log("Fuera de la función - Variable externa:", variableExterna);

miFuncion();