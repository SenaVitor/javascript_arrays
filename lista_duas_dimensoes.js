const alunos = ['Yuri', 'Herberth', 'Werick', 'Sara'];
const medias = [6, 8, 9, 10];

let listaAlunosNotas = [alunos, medias];

console.log(`${listaAlunosNotas[0][0]} sua média é ${listaAlunosNotas[1][0]}`); // Imprime apenas o nome e a média de um aluno
console.table(listaAlunosNotas); // Imprime todo o array