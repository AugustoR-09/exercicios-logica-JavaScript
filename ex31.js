// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

// Com Switch
function diaCorrespondente(n) {
	switch (n) {
		case 1:
			return 'Domingo';
		case 2:
			return 'Segunda';
		case 3:
			return 'Terça';
		case 4:
			return 'Quarta';
		case 5:
			return 'Quinta';
		case 6:
			return 'Sexta';
		case 7:
			return 'Sábado';

		default:
			return 'Inválido';
	}
}
// console.log(diaCorrespondente(0));

// Com Array
function porArray(n) {
	const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	if (dias[n - 1]) {
		return dias[n - 1];
	} else {
		return 'Inválido';
	}
}
console.log(porArray(8));
