// undefined
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30));

// REST
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

const numeros = [1,2,3,4]

const timesFut = ['santos','bragantino']
const timeFutBons = ['sao paulo', 'Corinthians']

// SPREAD
const timesDeFutebol = [...timesFut, ...timeFutBons];
console.log(timesDeFutebol);

const carroMurata = {
    modelo: 'Fiesta',
    marca: 'Fiat',
    motor: 1.6
}

const carroRebeca = {
    ...carroMurata,
    motor: 1.8
}

console.log(carroRebeca);

// DESESTRUTURACAO
const {motor: motorDoCarroDaRebeca} = carroRebeca;
const {motor: motorDoCarroDoMurata} = carroMurata;

console.log(motorDoCarroDaRebeca);
console.log(motorDoCarroDoMurata);

const [item1, item2, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(outrosTimes);


