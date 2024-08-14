// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "eletrico")

class Pokemon {
    #hp = 100;

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'eletrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovao`);
    }
}

const pikachuDoAsh = new Pikachu()

pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.exibeHp()

pikachuDoAsh.atacar()

const pikachu = new Pokemon('pikachu', 'eletrico');
// pikachu.atacar('choque do trovao')

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
