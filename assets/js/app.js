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