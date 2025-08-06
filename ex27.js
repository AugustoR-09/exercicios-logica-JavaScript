// Faça um Programa que leia três números e mostre-os em ordem decrescente.

function ordereitor(n1, n2, n3) {
	const numeros = [n1, n2, n3];
	numeros.sort((a, b) => b - a);
	return numeros;
}

console.log(ordereitor(1, 2, 3));
