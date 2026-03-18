const carrito = [];

let continuar = true;

while (continuar) {

    let producto = prompt("Escribe algo para agregar al carrito:");

    if (confirm("¿Quieres agregar '" + producto + "' al carrito?")) {
        carrito.push(producto);
    }

    continuar = confirm("¿Quieres agregar otro producto?");
}

console.log(carrito);