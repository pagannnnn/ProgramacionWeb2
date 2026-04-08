
let tareas = [];


function mostrarMenu() {
    let opcion = parseInt(prompt(
        "===== MENÚ DE TAREAS =====\n" +
        "1.- Agregar tarea\n" +
        "2.- Ver tareas\n" +
        "3.- Marcar tarea como completada\n" +
        "4.- Salir\n\n" +
        "Elige una opción:"
    ));

    return opcion;
}


function agregarTarea() {
    let nombreTarea = prompt("Escribe el nombre de la nueva tarea:");

    if (nombreTarea && nombreTarea.trim() !== "") {
        let nuevaTarea = {
            nombre: nombreTarea,
            completada: false
        };

        tareas.push(nuevaTarea);
        alert("La tarea se agregó correctamente.");
    } else {
        alert("No se puede agregar una tarea vacía.");
    }
}


function verTareas() {
    if (tareas.length === 0) {
        alert("La lista de tareas está vacía.");
    } else {
        let mensaje = "===== LISTA DE TAREAS =====\n\n";

        for (let i = 0; i < tareas.length; i++) {
            mensaje += (i + 1) + ".- " + tareas[i].nombre +
                " [" + (tareas[i].completada ? "Completada" : "Pendiente") + "]\n";
        }

        alert(mensaje);
    }
}


function marcarComoCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas para marcar.");
        return;
    }

    let mensaje = "Selecciona el número de la tarea que deseas completar:\n\n";

    for (let i = 0; i < tareas.length; i++) {
        mensaje += (i + 1) + ".- " + tareas[i].nombre +
            " [" + (tareas[i].completada ? "Completada" : "Pendiente") + "]\n";
    }

    let numero = parseInt(prompt(mensaje));

    if (numero >= 1 && numero <= tareas.length) {
        tareas[numero - 1].completada = true;
        alert("La tarea \"" + tareas[numero - 1].nombre + "\" fue marcada como completada.");
    } else {
        alert("Número de tarea no válido.");
    }
}

function iniciarPrograma() {
    let activo = true;

    while (activo) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarComoCompletada();
                break;
            case 4:
                activo = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
                break;
        }
    }
}


iniciarPrograma();