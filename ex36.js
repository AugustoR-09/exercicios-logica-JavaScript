// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth() + 1;
const diaAtual = dataAtual.getDate();

function dataIsValid(date) {
	let data = date.split('/');

	const dia = Number(data[0]);
	const mes = Number(data[1]);
	const ano = Number(data[2]);

	if (ano === anoAtual) {
		return currentYear(dia, mes);
	} else if (yearIsvalid(ano)) {
		if (monthIsValid(mes)) {
			if (dayIsValid(dia, mes, ano)) {
				return 'Data válida';
			} else {
				return 'Data inválida';
			}
		} else {
			return 'Data inválida';
		}
	} else {
		return 'Data inválida';
	}
}
console.log(dataIsValid('17/07/2025'));

function yearIsvalid(ano) {
	if (ano > 0 && ano <= 2025) {
		return true;
	} else {
		return false;
	}
}

function monthIsValid(mes) {
	if (mes > 0 && mes <= 12) {
		return true;
	} else {
		return false;
	}
}

function dayIsValid(dia, mes, ano) {
	const meses31 = [1, 3, 5, 7, 8, 10, 12];
	const meses30 = [4, 6, 9, 11];

	if (meses31.includes(mes)) {
		if (dia > 0 && dia <= 31) {
			return true;
		} else {
			return false;
		}
	} else if (meses30.includes(mes)) {
		if (dia > 0 && dia <= 30) {
			return true;
		} else {
			return false;
		}
	} else {
		if (eBissexto(ano)) {
			if (dia > 0 && dia <= 29) {
				return true;
			} else {
				return false;
			}
		} else {
			if (dia > 0 && dia <= 28) {
				return true;
			} else {
				return false;
			}
		}
	}
	function eBissexto(ano) {
		if (ano % 100 == 0) {
			if (ano % 400 == 0) {
				return true;
			} else {
				return false;
			}
		} else if (ano % 4 == 0) {
			return true;
		} else {
			return false;
		}
	}
}

function currentYear(dia, mes) {
	const dataInformada = new Date(anoAtual, mes - 1, dia);
	const hoje = new Date();

	if (dataInformada <= hoje && dayIsValid(dia, mes, anoAtual)) {
		return 'Data válida';
	} else {
		return 'Data inválida';
	}
}
