let baraja = [];
const tipos = ['C','D','H','S'];
const barajasEspeciales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;

//botones
const btnPedir = document.querySelector('#btnPedir');
const mostrarPuntosHTML = document.querySelectorAll('small');

//Jugador
const jugadorCartas = document.querySelector('#jugador-cartas');


const crearBaraja = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            baraja.push(i+tipo);
        }
    }
    for(let tipo of tipos){
        for(especial of barajasEspeciales){
            baraja.push(especial+tipo);
        }
    }
    baraja = _.shuffle(baraja);
    return baraja;
}

crearBaraja();

const pedirCarta = () => {
    if(baraja.length === 0){
        console.log("no hay mas cartas");
    }
    
    const carta = baraja.pop();
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ((isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1);
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
});
