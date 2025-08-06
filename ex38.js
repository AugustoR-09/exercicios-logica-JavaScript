// Faça um Programa para um caixa eletrônico.

// O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas.

// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.

// O programa não deve se preocupar com a quantidade de notas existentes na máquina.

// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;

// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

function efetuarSaque(valor) {
	if (valor < 10 || valor > 600) {
		return 'O valor precisa ser maior que 10 reais e menor que 600 reais';
	}

	const notas = [100, 50, 10, 5, 1];
	const resultado = [];

	for (let nota of notas) {
		console.log(nota);
		const qtd = Math.floor(valor / nota);
		console.log(qtd);
		valor = valor % nota;

		if (qtd > 0) {
			const textoNota = qtd === 1 ? 'nota' : 'notas';
			resultado.push(`${qtd} ${textoNota} de ${nota}`);
		}
	}

	return `Notas fornecidas: ${resultado.join(', ')}`;
}

efetuarSaque(256);
// Notas fornecidas: 2 notas de 100, 1 nota de 50, 1 nota de 5, 1 nota de 1
efetuarSaque(399);
// Notas fornecidas: 3 notas de 100, 1 nota de 50, 4 notas de 10, 1 nota de 5, 4 notas de 1
