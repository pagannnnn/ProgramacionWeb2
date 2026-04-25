
let usuarios = [];


const form = document.getElementById("formUsuario");
const tabla = document.getElementById("tablaUsuarios");
const inputArchivo = document.getElementById("importarJSON");
const descargarBtn = document.getElementById("descargarBtn");


function generarID() {
    return usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("correo").value.trim();

    if (nombre === "" || email === "") {
        alert("Por favor llena todos los campos");
        return;
    }

    const nuevoUsuario = {
        id: generarID(),
        nombre: nombre,
        email: email
    };

    usuarios.push(nuevoUsuario);

    mostrarUsuarios();
    form.reset();
});


function mostrarUsuarios() {
    tabla.innerHTML = "";

    usuarios.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td contenteditable="true" onblur="editarCampo(${index}, 'nombre', this.textContent)">
                ${user.nombre}
            </td>
            <td contenteditable="true" onblur="editarCampo(${index}, 'email', this.textContent)">
                ${user.email}
            </td>
            <td>
                <button onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(row);
    });
}


function editarCampo(index, campo, valor) {
    if (valor.trim() === "") {
        alert("El campo no puede estar vacío");
        mostrarUsuarios();
        return;
    }

    usuarios[index][campo] = valor.trim();
}


function eliminarUsuario(index) {
    const confirmar = confirm("¿Estás seguro de eliminar este usuario?");

    if (confirmar) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
    }
}


inputArchivo.addEventListener("change", function (e) {
    const archivo = e.target.files[0];

    if (!archivo) {
        return;
    }

    const lector = new FileReader();

    lector.onload = function (e) {
        try {
            const datos = JSON.parse(e.target.result);

            if (Array.isArray(datos)) {
                usuarios = datos;
                mostrarUsuarios();
            } else {
                alert("El archivo JSON debe contener un arreglo de usuarios");
            }

        } catch (error) {
            alert("Error al cargar el archivo JSON");
        }
    };

    lector.readAsText(archivo);
});

descargarBtn.addEventListener("click", function () {
    const contenidoJSON = JSON.stringify(usuarios, null, 2);

    const blob = new Blob([contenidoJSON], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.json";
    a.click();

    URL.revokeObjectURL(url);
});
