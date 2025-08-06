// Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function saudacao(resposta) {
	switch (resposta) {
		case 'M':
			return 'Bom Dia';
		case 'V':
			return 'Vespertino';
		case 'N':
			return 'Noturno';
		default:
			return 'Valor inválido';
	}
}

const resposta = 'm';
setTimeout(() => {
	const mensagem = saudacao(resposta.toUpperCase());
	console.log(mensagem);
}, 2000);
