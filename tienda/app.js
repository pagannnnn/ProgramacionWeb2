const carrito = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function agregarProducto(carrito, producto, cantidad) {
    const indice = carrito.findIndex(
        (item) => item.producto.nombre.toLowerCase() === producto.nombre.toLowerCase()
    );

    if (indice !== -1) {
        carrito[indice].cantidad += cantidad;
    } else {
        carrito.push({ producto, cantidad });
    }

    mostrarCarrito(carrito);
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito(carrito);
}

function mostrarCarrito(carrito) {
    const listaCarrito = document.getElementById("carrito");
    const totalCarrito = document.getElementById("total");

    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.producto.precio * item.cantidad;
        total += subtotal;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.producto.nombre} - $${item.producto.precio} x ${item.cantidad}
            = $${subtotal.toFixed(2)}
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;

        listaCarrito.appendChild(li);
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreProducto = document.getElementById("nombre").value.trim();
    const precioProducto = parseFloat(document.getElementById("precio").value);
    const cantidadProducto = parseInt(document.getElementById("cantidad").value);

    if (nombreProducto === "" || isNaN(precioProducto) || isNaN(cantidadProducto)) {
        alert("Por favor llena todos los campos correctamente");
        return;
    }

    if (precioProducto <= 0 || cantidadProducto <= 0) {
        alert("El precio y la cantidad deben ser mayores a cero");
        return;
    }

    const producto = new Producto(nombreProducto, precioProducto);

    agregarProducto(carrito, producto, cantidadProducto);

    document.getElementById("formulario").reset();
});