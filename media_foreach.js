const notas = [10, 6.5, 7.5, 8];
let soma = 0;
notas.forEach(nota => {
    soma += nota;
});
let media = soma/notas.length;
console.log(`A média é ${media}`);