function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu um erro na iteracao dos numeros')
    }
})

// console.log("inicio");
// // funcaoMuitoPesada();
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

// console.log("fim");

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("inicio")

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('murata@gmail.com', 123123).then(resultado => {
        console.log(resultado)
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log("fim")
}

execucaoPrincipal();