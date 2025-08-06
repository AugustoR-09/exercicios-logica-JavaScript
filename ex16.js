// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
// Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
// Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

function calcTinta(area) {
	const valorLata = 80;
	const lataLitros = 18;
	const litrosComprar = Math.ceil(area / 3 / lataLitros);
	const valorCompra = litrosComprar * valorLata;

	console.log('Você precisará comprar: ' + litrosComprar + ' latas');
	console.log('Valor: R$' + valorCompra.toFixed(2));
}
calcTinta(110);
