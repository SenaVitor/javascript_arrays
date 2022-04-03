const nomes = ['Vitor', 'Leandro', "José Wilker", "Andrew", "João Victor", "Ian"];
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
console.log("Tamanho do array: ", nomes.length);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);