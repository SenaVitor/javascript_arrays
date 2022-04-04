const notas = [10, 6.5, 7.5, 8];
let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}
let media = soma/notas.length;
console.log(`A média é ${media}`);