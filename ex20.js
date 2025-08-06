// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
function indicadorSinal(n) {
	if (n > 0) {
		return 'O número é positivo';
	} else if (n < 0) {
		return 'O número é negativo';
	} else {
		return 'O número é neutro';
	}
}
console.log('Insira um número e direi se é positivo ou negativo');
setTimeout(() => {
	console.log(indicadorSinal(0));
}, 2000);
