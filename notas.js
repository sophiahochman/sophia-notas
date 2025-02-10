// Função para calcular a média
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função para determinar a aprovação
function verificarAprovacao(media, mediaAprovacao) {
    return media >= mediaAprovacao ? 'Aprovado' : 'Reprovado';
}

// Notas dos alunos
let notasAlunos = [8, 7, 9];
let mediaAprovacao = 7;  // Média necessária para aprovação

// Calcular a média
let media = calcularMedia(notasAlunos);

// Verificar a aprovação
let resultado = verificarAprovacao(media, mediaAprovacao);

// Exibir o resultado
console.log('Média: ' + media.toFixed(2));
console.log('Resultado: ' + resultado);
```
