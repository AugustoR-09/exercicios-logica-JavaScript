// Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

// Dicas: Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro; Triângulo Equilátero: três lados iguais; Triângulo Isósceles: quaisquer dois lados iguais; Triângulo Escaleno: três lados diferentes;

function main(l1, l2, l3) {
	if (isTriangle(l1, l2, l3)) {
		return triangleKind(l1, l2, l3);
	} else {
		return 'Não é um triângulo';
	}
}

function isTriangle(l1, l2, l3) {
	if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
		return true;
	} else return false;
}

function triangleKind(l1, l2, l3) {
	if (l1 == l2 && l1 == l3) {
		return 'Triângulo Equilátero';
	} else if (l1 == l2 || l1 == l3 || l2 == l3) {
		return 'Triângulo Isósceles';
	} else if (l1 != l2 && l1 != l3 && l2 != l3) {
		return 'Triângulo Escaleno';
	}
}

console.log(main(3, 4, 10));
