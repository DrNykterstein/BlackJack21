let baraja = [];
const tipos = ['C','D','H','S'];
const barajasEspeciales = ['A','J','Q','K'];

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
    
    console.log(baraja);
    baraja = _.shuffle(baraja);
    console.log(baraja);
    return baraja;
}

crearBaraja();

const pedirCarta = () => {
    if(baraja.length === 0){
        console.log("no hay mas cartas");
    }
    
    const carta = baraja.pop();
    
    console.log(baraja);
    console.log(carta)
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ((isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1);
}

const valor = valorCarta('kd');
console.log(valor);