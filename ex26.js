// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

function escolherProduto(n1, n2, n3) {
	if (n1 < n2 && n1 < n3) {
		return 'O primeiro número é o mais barato';
	} else if (n2 < n1 && n2 < n3) {
		return 'O segundo número é o mais barato';
	} else if (n3 < n1 && n3 < n2) {
		return 'O terceiro número é o mais barato';
	} else {
		return 'Existem aí valores iguais';
	}
}
console.log('Insira o preço de três produtos e direi qual é o mais barato');
setTimeout(() => {
	console.log(escolherProduto(5, 6, 7));
}, 2000);
