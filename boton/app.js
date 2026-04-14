function generarListas() {
    let numero = document.getElementById("numero").value;
    let contenedor = document.getElementById("contenedor");

  
    if (numero === "" || numero <= 0) {
        alert("Ingresa un número válido");
        return;
    }


    contenedor.innerHTML = "";

    
    for (let i = 1; i <= numero; i++) {
        let ul = document.createElement("ul");

        for (let j = 1; j <= 5; j++) {
            let li = document.createElement("li");
            li.textContent = `Lista ${i} - Elemento ${j}`;
            ul.appendChild(li);
        }

        contenedor.appendChild(ul);
    }
}