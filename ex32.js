// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média.

// A atribuição de conceitos obedece à tabela abaixo: Média de Aproveitamento Conceito Entre 9.0 e 10.0 A Entre 7.5 e 9.0 B Entre 6.0 e 7.5 C Entre 4.0 e 6.0 D Entre 4.0 e zero E

// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

const calcMedia = (n1, n2) => {
	const media = (n1 + n2) / 2;

	if (media <= 10 && media >= 9) {
		console.log('Tirou um A!!, APROVADO');
	} else if (media < 9 && media >= 7.5) {
		console.log('Tirou um B!!, APROVADO');
	} else if (media < 7.5 && media >= 6) {
		console.log('Tirou um C!!, APROVADO');
	} else if (media < 6 && media >= 4) {
		console.log('Tirou um D!!, REPROVADO');
	} else if (media < 4 && media >= 0) {
		console.log('Tirou um E!!, REPROVADO');
	} else {
		console.log('Valores estranhos');
	}
};

calcMedia(-1, 0);
