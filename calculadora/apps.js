


function agregarPantalla(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

function calcularResultado() {
    let expresion = document.getElementById("pantalla").value;
    try {
        let resultado = eval(expresion);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }}
    document.addEventListener("keydown", function(event) {
    const tecla = event.key;

    
    if (!isNaN(tecla)) {
        agregarPantalla(tecla);
    }


    else if (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
        agregarPantalla(tecla);
    }

   
    else if (tecla === "Enter") {
        calcularResultado();
    }

    
    else if (tecla === "Backspace") {
        let pantalla = document.getElementById("pantalla");
        pantalla.value = pantalla.value.slice(0, -1);
    }


    else if (tecla === "Escape") {
        limpiarPantalla();
    }
});