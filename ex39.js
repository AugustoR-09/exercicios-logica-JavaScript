// Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.
const int = 5;
const dec = 2.4;

function isInt(n) {
	if ((n * 10) % 10 === 0) {
		console.log('O número é inteiro');
	} else {
		console.log('O número é decimal');
	}
}

isInt(int);
isInt(dec);
