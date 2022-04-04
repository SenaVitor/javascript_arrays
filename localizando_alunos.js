const alunos = ['Yuri', 'Herberth', 'Werick', 'Sara'];
const medias = [6, 8, 9, 10];

let listaAlunosNotas = [alunos, medias];

const exibeNomeNota = (nomeAluno) => {
    if(listaAlunosNotas[0].includes(nomeAluno)){
        let indice = listaAlunosNotas[0].indexOf(nomeAluno);
        return listaAlunosNotas[0][indice] + ', sua média é ' + listaAlunosNotas[1][indice];
    }else{
        return "Aluno não cadastrado";
    }
}

console.log(exibeNomeNota("Sara"));