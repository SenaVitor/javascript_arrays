const salaA = [10, 6.5, 7.5, 8];
const salaB = [6, 7, 8, 4];
const salaC = [8.5, 9.5, 10, 2];

function mediaSala(notas){
    const soma = notas.reduce((acum, atual) => atual + acum, 0);
    return soma/notas.length;
}

/*
//Também poderia ser escrito dessas 2 formas

const soma = notas.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

OU

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma = notas.reduce(operacaoNumerica, 0)
*/

console.log(`Média da sala A ${mediaSala(salaA)}`);
console.log(`Média da sala B ${mediaSala(salaB)}`);
console.log(`Média da sala C ${mediaSala(salaC)}`);
