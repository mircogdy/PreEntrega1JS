//JUEGO: ADIVINAR EL NUMERO ENTRE 1 Y 100

const nombreJugador = prompt("Por favor, ingresa tu nombre.")

if (nombreJugador === null){
    alert("El juego se ha cancelado.")
} else {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let intentos = 0;

    function adivinarNumero(){

        let numeroJugador

        do{
            const entradaJugador = prompt("Por favor, ingresa un numero.")

            if(entradaJugador === null){
                return;
            }

            numeroJugador = parseInt(entradaJugador);

        } while(isNan(numeroJugador) || numeroJugador < 1 || numeroJugador > 100);

        intentos++;

        if (numeroUsuario === numeroAleatorio){
            if (intentos < 5) {
                alert(`¡Felicidades, ${nombreJugador}! Adivinaste el número ${numeroAleatorio} en solo ${intentos} intentos.`);
            } else {
                alert(`¡Felicidades, ${nombreJugador}! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
            }
        } else if (numeroUsuario < numeroAleatorio){
            alert('El número es mayor. Intenta de nuevo.');
            adivinarNumero();
        } else{
            alert('El número es menor. Intenta de nuevo.');
            adivinarNumero();
        }
    }

    adivinarNumero();
}