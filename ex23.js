// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; A mensagem "Reprovado", se a média for menor do que sete; A mensagem "Aprovado com Distinção", se a média for igual a dez.

function reprovador(n1, n2) {
	const media = (n1 + n2) / 2;

	if (media == 10) {
		return 'Aprovado com distinção';
	} else if (media >= 7 && media < 10) {
		return 'Aprovado';
	} else if (media < 7 && media > -1) {
		return 'Reprovado';
	} else {
		return 'Houve um erro';
	}
}

console.log(reprovador(145, 7));
