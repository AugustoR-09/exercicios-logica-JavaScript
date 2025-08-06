// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
function calcArea(raio) {
	const area = Math.PI * (raio * raio);
	console.log(area.toFixed(0));
}
calcArea(5);

// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
function calcAreaQuadrado(lado) {
	console.log(lado * lado);
}
calcAreaQuadrado(5);

// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
function calcSalario(valorHora, horasTrabalhadas) {
	console.log(valorHora * horasTrabalhadas);
}
calcSalario(20, 120);

// Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).
function FarenheitToCelsius(graus) {
	const celsius = (5 * (graus - 32)) / 9;
	console.log('Em celsius é: ' + celsius.toFixed(0));
}
FarenheitToCelsius(72);

// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.
function celsiusToFahrenheit(graus) {
	const Farenheit = graus * 1.8 + 32;
	console.log('Em farenheit é: ' + Farenheit.toFixed(0));
}
celsiusToFahrenheit(22);
