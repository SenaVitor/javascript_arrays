const notas = [10, 6, 8];
let media = 0;
notas.push(7);
console.log(notas);
for(let i = 0; i<notas.length; i++){
    media = media + notas[i];
}
media = media/notas.length;
console.log(`A média é ${media}`);