const notas = [10, 6.5, 7.5, 8];
let media = 0;
for(let i = 0; i < notas.length; i++){
    media = (media + notas[i]);
}
media = media/notas.length;
console.log(`A média é ${media}`);