// Obtener referencia al botón de compra
const comprarBtn = document.getElementById('comprarBtn');

// Agregar evento click al botón de compra
comprarBtn.addEventListener('click', function() {
    // Mostrar el cuadro de diálogo modal
    mostrarModal();
});


function mostrarModal() {
    // Pedir al usuario que introduzca los datos
    const titular = prompt("Introduce el Titular de la Tarjeta:");
    const numero = prompt("Introduce el Número de la Tarjeta:");
    const caducidad = prompt("Introduce la Fecha de Caducidad:");
    const codigo = prompt("Introduce el Código:");

    // Mostrar los datos en la consola (puedes enviarlos a un servidor o realizar otras acciones)
    console.log("Titular de la Tarjeta:", titular);
    console.log("Número de la Tarjeta:", numero);
    console.log("Fecha de Caducidad:", caducidad);
    console.log("Código:", codigo);
}
