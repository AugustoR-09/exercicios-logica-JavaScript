// Faça um Programa que mostre a mensagem "Alo mundo" na tela.
console.log('Alo mundo');

// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
function showNumber(numero) {
	console.log('O número informado foi: ' + numero);
}
showNumber(2);

// Faça um Programa que peça dois números e imprima a soma.
function soma(n1, n2) {
	console.log(n1 + n2);
}
soma(1, 2);

// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
function calcMedia(n1, n2, n3, n4) {
	console.log((n1 + n2 + n3 + n4) / 4);
}
calcMedia(7, 10, 6, 9);

// Faça um Programa que converta metros para centímetros.
function mToCent(metros) {
	console.log(`Isso equivale a: ${metros * 100} centímetros`);
}
mToCent(1.7);
