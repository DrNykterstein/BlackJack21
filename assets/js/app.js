(() => {
    'use strict'

    let baraja = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const barajasEspeciales = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0;
    let puntosComputadora = 0;

    //botones
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const mostrarPuntosHTML = document.querySelectorAll('small');

    //Jugador
    const jugadorCartas = document.querySelector('#jugador-cartas');
    const jugadorComputadora = document.querySelector('#computadora-cartas');


    const crearBaraja = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                baraja.push(i + tipo);
            }
        }
        for (let tipo of tipos){
            for (let especial of barajasEspeciales){
                baraja.push(especial + tipo);
            }
        }
        baraja = _.shuffle(baraja);
        return baraja;
    }

    crearBaraja();

    const pedirCarta = () => {
        if (baraja.length === 0) {
            console.log("no hay mas cartas");
        }

        const carta = baraja.pop();
        return carta;
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return ((isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1);
    }

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            mostrarPuntosHTML[1].innerText = puntosComputadora;
            // Muestro la imagen de la carta
            const imagenCarta = document.createElement('img');
            imagenCarta.src = `assets/cartas/${carta}.png`;
            imagenCarta.classList.add('carta2');
            //inserto carta en el html
            jugadorComputadora.append(imagenCarta);
            if (puntosMinimos > 21) {
                break;
            }
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Empate');
            } else if (puntosMinimos > 21) {
                alert('Gano la computadora');
            } else if (puntosComputadora > 21) {
                alert('Ganaste');
            }else{
                alert('Computadora gana')
            }
        }, 1000);

    }

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        mostrarPuntosHTML[0].innerText = puntosJugador;
        // Muestro la imagen de la carta
        const imagenCarta = document.createElement('img');
        imagenCarta.src = `assets/cartas/${carta}.png`;
        imagenCarta.classList.add('carta');
        //inserto carta en el html
        jugadorCartas.appendChild(imagenCarta);
        if (puntosJugador > 21) {
            console.warn("Perdiste");
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            btnPedir.classList.add('perdiste');
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('ganaste');
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            btnPedir.classList.add('perdiste');
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    });

})();


