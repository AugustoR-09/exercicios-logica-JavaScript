// Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

const par = 8;
const impar = 11;

function isPar(n) {
	if (n % 2 === 0) {
		console.log('O número é par');
	} else {
		console.log('O número é ímpar');
	}
}

isPar(par);
isPar(impar);
