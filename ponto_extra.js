const notas = [10, 9, 8, 5, 7];
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas);