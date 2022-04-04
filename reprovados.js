const nomes = ['Paulo Gustavo', 'Daniel', 'Yuri Airton', 'Edson Ruan']
const notas = [6, 7, 4.5, 3];
const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
console.log(`reprovados: ${reprovados}`);