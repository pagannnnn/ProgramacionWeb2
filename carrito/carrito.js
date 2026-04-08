
let productos = [
    { nombre: "Camisa", precio: 300 },
    { nombre: "Pantalón", precio: 550 },
    { nombre: "Zapatos", precio: 750 },
    { nombre: "Sombrero", precio: 550 },
    { nombre: "Tenis", precio: 1200 }
];


let carrito = [];


function mostrarMenu() {
    let menu = "=== TIENDA EN LÍNEA ===\n";
    menu += "Selecciona una opción:\n\n";

    for (let i = 0; i < productos.length; i++) {
        menu += (i + 1) + ".- " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += "\n6.- Ver carrito y total";
    menu += "\n7.- Eliminar producto del carrito";
    menu += "\n8.- Vaciar carrito";
    menu += "\n9.- Salir";

    return menu;
}

function agregarProducto(indice) {
    let producto = productos[indice];
    carrito.push(producto);
    alert("Producto agregado: " + producto.nombre + " - $" + producto.precio);
}


function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "=== CARRITO DE COMPRAS ===\n\n";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ".- " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        total += carrito[i].precio;
    }

    mensaje += "\nTotal a pagar: $" + total;
    alert(mensaje);
}

function eliminarProducto() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito para eliminar.");
        return;
    }

    let mensaje = "=== ELIMINAR PRODUCTO ===\n\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ".- " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }

    let opcionEliminar = prompt(mensaje + "\nEscribe el número del producto que deseas eliminar:");
    opcionEliminar = Number(opcionEliminar);

    if (isNaN(opcionEliminar) || opcionEliminar < 1 || opcionEliminar > carrito.length) {
        alert("Opción no válida.");
    } else {
        let productoEliminado = carrito.splice(opcionEliminar - 1, 1);
        alert("Producto eliminado: " + productoEliminado[0].nombre);
    }
}


function vaciarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito ya está vacío.");
    } else {
        carrito = [];
        alert("El carrito ha sido vaciado.");
    }
}

let opcion;


do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > 9) {
        alert("Opción no válida, intenta nuevamente.");
    } else if (opcion >= 1 && opcion <= 5) {
        agregarProducto(opcion - 1);
    } else if (opcion === 6) {
        verCarrito();
    } else if (opcion === 7) {
        eliminarProducto();
    } else if (opcion === 8) {
        vaciarCarrito();
    }

} while (opcion !== 9);

alert("Gracias por visitar la tienda.");