// Faça um Programa que leia três números e mostre o maior e o menor deles.

function bocaJacare(n1, n2, n3) {
	if (n1 < n2 && n1 < n3) {
		return 'O primeiro número é menor';
	} else if (n2 < n1 && n2 < n3) {
		return 'O segundo número é menor';
	} else if (n3 < n1 && n3 < n2) {
		return 'O terceiro número é menor';
	} else {
		return 'Existem aí valores iguais';
	}
}
console.log('Insira três números e direi qual é o menor');
setTimeout(() => {
	console.log(bocaJacare(5, 6, 7));
}, 2000);
