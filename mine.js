//JUEGO

const nombreJugador = prompt("Por favor, ingresa tu nombre:"); 

if (nombreJugador === null){ //si el nombre es nulo
    alert("El juego se ha cancelado.");//el sistema larga un alert diciendo que el juego se cancela
} else { //sino 
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; //ejecuta la tarea de pensar un numero random

    let intentos = 0; //contador

    function adivinarNumero(){ // ejecutamos una funcion

        let numeroJugador; //le damos una variable para archivar el valor ingresado del usuario

        do{ //larga
            const entradaJugador = prompt("Adivina el número (entre 1 y 100):"); //esto para comenzar el juego
            
            if (entradaJugador === null){ //si es nulo, vuelve
                return;
            }

            numeroJugador = parseInt(entradaJugador); //parseInt para guardar el valor ingresado por el usuario en la variable

        } while (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100); //mientras no cumpla alguno de estos parametros

        intentos++;

        if (numeroJugador === numeroAleatorio){
            if (intentos < 5) {
                alert(`¡Felicidades, ${nombreJugador}! Adivinaste el número ${numeroAleatorio} en solo ${intentos} intentos.`);//mensaje de premio cuando acierta antes de los 5
            } else {
                alert(`¡Felicidades, ${nombreJugador}! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
            }
        } else if (numeroJugador < numeroAleatorio){
            alert('El número es mayor. Intenta de nuevo.');
            adivinarNumero();
        } else{
            alert('El número es menor. Intenta de nuevo.');
            adivinarNumero();//llamar a la funcion para que se active de nuevo porque no acerto
        }
    }

    adivinarNumero(); //llamar a la funcion para que se active
}
