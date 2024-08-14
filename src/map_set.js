let meuMap = new Map();
meuMap.set("nome", "Murata");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

const cpfs = new Set();

cpfs.add('19891359867')
cpfs.add('22004732814')
cpfs.add('30865075867')

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Murata', 'Rebeca', 'Rebeca', 'Mendes', 'Ana', 'Ana']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);
