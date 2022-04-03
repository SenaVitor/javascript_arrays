const listaChamada = ['Vitor', 'Leandro', "José Wilker", "Andrew", "João Victor", "Ian"];
//O método splice pode ser usado para remover e adicionar elementos no array
//array.splice(indice inicial, Quantidade de elementos que serão removidos a partir desse índice, novo elemento que será adicionado) 
listaChamada.splice(1, 2, 'Rodrigo'); //Remove os elementos do índice 1 até o índice 2 e adiciona um novo elemento no índice inicial (no caso o índice 1)
console.log(`Lista de chamada: ${listaChamada}`);
listaChamada.splice(2, 0, 'Yuri'); //Apenas adiciona um novo elemento no índice 2
console.log(`Lista de chamada: ${listaChamada}`);
listaChamada.splice(2, 1, 'Chico'); //Mesma situação do primeiro exemplo, porém removendo apenas um elemento
console.log(`Lista de chamada: ${listaChamada}`);
listaChamada.splice(2, 1); //Apenas remove o elemento que está no índice 2
console.log(`Lista de chamada: ${listaChamada}`);