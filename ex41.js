// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.

// O resultado da operação deve ser acompanhado de uma frase que diga se o número é: par ou ímpar; positivo ou negativo; inteiro ou decimal.

const number1 = 3;
const number2 = 8;

function main(n1, n2, operacao) {
	const n = operador(n1, n2, operacao);
	console.log(`O resultado é: ${n}; O número é: ${indicadorSinal(n)}, ${isPar(n)}, e ${isInt(n)}`);
}

main(number1, number2, '+');
main(number1, number2, '-');
main(number1, number2, '/');
main(number1, number2, '*');

function operador(n1, n2, operacao) {
	if (operacao === '+') {
		return n1 + n2;
	} else if (operacao === '-') {
		return n1 - n2;
	} else if (operacao === '/') {
		return n1 / n2;
	} else if (operacao === '*') {
		return n1 * n2;
	}
}

function isPar(n) {
	if (n % 2 === 0) {
		return 'par';
	} else {
		return 'ímpar';
	}
}

function isInt(n) {
	if ((n * 10) % 10 === 0) {
		return 'inteiro';
	} else {
		return 'decimal';
	}
}

function indicadorSinal(n) {
	if (n > 0) {
		return 'positivo';
	} else if (n < 0) {
		return 'negativo';
	} else {
		return 'neutro';
	}
}
