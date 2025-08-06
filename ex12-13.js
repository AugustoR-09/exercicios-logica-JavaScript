// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
function calcPesoIdeal(altura) {
	const pesoIdeal = 72.7 * altura - 58;
	console.log(pesoIdeal.toFixed(0));
}
calcPesoIdeal(1.7);

// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: Para homens: (72.7h) - 58 Para mulheres: (62.1h) - 44.7
function pesoIdeal(sexo, altura) {
	switch (sexo.toLowerCase()) {
		case 'homem':
			console.log('Seu peso ideal é: ', (72.7 * altura - 58).toFixed(0));
			break;
		case 'mulher':
			console.log('Seu peso ideal é: ', (62.1 * altura - 44.7).toFixed(0));
			break;

		default:
			console.error('Informações incorretas');
			break;
	}
}
pesoIdeal('homem', 1.7);
