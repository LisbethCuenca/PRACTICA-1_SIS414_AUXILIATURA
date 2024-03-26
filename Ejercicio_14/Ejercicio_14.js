document.getElementById('botonModificar').addEventListener('click', function() {
    document.getElementById('parrafo').textContent = " modificado";
});

document.getElementById('botonCrear').addEventListener('click', function() {
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = "parrafo nuevo.";
    document.getElementById('contenedor').appendChild(nuevoParrafo);
});

document.getElementById('botonEliminar').addEventListener('click', function() {
    let parrafoAEliminar = document.getElementById('parrafo');
    parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);
});

document.getElementById('botonEliminar').addEventListener('click', function() {
    alert("eliminado");
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if (nombre.trim() !== '' && email.trim() !== '') {
        
        console.log('Nombre:', nombre);
        console.log('Email:', email);
    } else {
        alert('completa elformulario.');
    }
});
