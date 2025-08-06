// Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
function eBissexto(ano) {
	if (ano % 100 == 0) {
		if (ano % 400 == 0) {
			return 'Ano bissexto';
		} else {
			return 'Não é bissexto';
		}
	} else if (ano % 4 == 0) {
		return 'Ano bissexto';
	} else {
		return 'Não é bissexto';
	}
}

console.log(eBissexto(1900));
