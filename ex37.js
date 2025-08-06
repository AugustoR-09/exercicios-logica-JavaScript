// Faça um Programa que leia um número inteiro maior que 0 e menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.

// Observando os termos no plural a colocação do "e", da vírgula entre outros.

// Exemplo: 326 = 3 centenas, 2 dezenas e 6 unidades 12 = 1 dezena e 2 unidades

// Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

function separador(n) {
	if (n < 1000 && n > 0) {
		if (n >= 100) {
			const array = n.toString().split('');
			const centena = array[0];
			const dezena = array[1];
			const unidade = array[2];

			return `${n} = ${praCentena(centena)} ${praDezena(dezena)} ${praUnidade(unidade)} `;
		} else if (n >= 10 && n <= 99) {
			const array = n.toString().split('');
			const dezena = array[1];
			const unidade = array[2];

			return `${n} = ${praDezena(dezena)} ${praUnidade(unidade)} `;
		} else if (n >= 1 && n <= 9) {
			const unidade = Number(n);

			return `${n} = ${praUnidade(unidade)}`;
		}
	} else {
		return 'O número precisa ser maior que 0 e menor que 1000';
	}
}
console.log(separador(205));

function praCentena(n) {
	if (n === 1) {
		return '1 centena';
	} else {
		return `${n} centenas`;
	}
}
function praDezena(n) {
	if (n == 0) {
		return 'e';
	} else if (n === 1) {
		return '1 dezena,';
	} else {
		return `${n} dezena,`;
	}
}
function praUnidade(n) {
	if (n === 0) {
		return '';
	} else if (n === 1) {
		return '1 unidade';
	} else {
		return `${n} unidades`;
	}
}
