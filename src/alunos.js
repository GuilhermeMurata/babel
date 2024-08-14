const alunos = [
    {nome: 'Murata', nota: 5},
    {nome: 'Mendes', nota: 8},
    {nome: 'Rebeca', nota: 3},
    {nome: 'Ana', nota: 6}
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));