// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo. a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.
function numeros(n1, n2, n3) {
	const res1 = n1 * 2 + n2 / 2;
	const res2 = n1 * 3 + n3;
	const res3 = n3 ** 3;
	console.log(
		`Primeiro resultado: ${res1}; Segundo resultado: ${res2}; Terceiro resultado: ${res3.toFixed(
			1
		)}`
	);
}
console.log('Insira: 2 números inteiros e um número real');
setTimeout(() => {
	numeros(2, 3, 8.4);
}, 2000);
