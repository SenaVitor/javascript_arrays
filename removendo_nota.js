const notas = [10, 7, 8, 5, 10];
let media = 0;
notas.pop();
console.log(notas);
for(let i = 0; i<notas.length; i++){
    media = media + notas[i];
}
media = media/notas.length;
console.log(`A média é ${media}`);