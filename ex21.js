// Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

function determinaSexo(letra) {
	console.log('Você digitou: ' + letra);
	switch (letra) {
		case 'F':
			return 'É molier';
		case 'M':
			return 'É macho';
		default:
			return 'Sexo inválido';
	}
}

console.log('De qual sexo você é?');
setTimeout(() => {
	console.log(determinaSexo('M'));
}, 1000);

setTimeout(() => {
	console.log(determinaSexo('F'));
}, 2000);

setTimeout(() => {
	console.log(determinaSexo('civic 2012'));
}, 3000);
