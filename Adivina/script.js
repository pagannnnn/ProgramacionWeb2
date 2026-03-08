let vidas = 3;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let respuesta = parseInt(prompt("Adivina el número del 1 al 10"));

while (respuesta !== numeroSecreto && vidas > 1) {

    vidas--;
    respuesta = parseInt(prompt("Intenta nuevamente"));

}

if(respuesta === numeroSecreto){
    console.log("Ganaste 🎉");
}else{
    console.log("Perdiste 💀 el número era: " + numeroSecreto);
}