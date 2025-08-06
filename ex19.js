// Faça um Programa que peça dois números e imprima o maior deles.

function bocaJacare(n1, n2) {
	if (n1 > n2) {
		return 'O primeiro número é maior';
	} else if (n2 > n1) {
		return 'O segundo número é maior';
	} else {
		return 'Os dois tem o mesmo valor';
	}
}
console.log('Insira dois números e direi qual é o maior');
setTimeout(() => {
	console.log(bocaJacare(5, 5));
}, 2000);
