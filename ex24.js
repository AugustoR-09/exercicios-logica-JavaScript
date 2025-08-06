// Faça um Programa que leia três números e mostre o maior deles.

function bocaJacare(n1, n2, n3) {
	if (n1 > n2 && n1 > n3) {
		return 'O primeiro número é maior';
	} else if (n2 > n1 && n2 > n3) {
		return 'O segundo número é maior';
	} else if (n3 > n1 && n3 > n2) {
		return 'O terceiro número é maior';
	} else {
		return 'Existem aí valores iguais';
	}
}
console.log('Insira três números e direi qual é o maior');
setTimeout(() => {
	console.log(bocaJacare(5, 6, 7));
}, 2000);
