// Exercicio 017
// Faça um Programa para uma loja de tintas.
// O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.

// Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.

// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:

// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// misturar latas e galões, de forma que o preço seja o menor.
//     Acrescente 10% de folga e sempre arredonde os valores para cima,
//     isto é, considere latas cheias.

// 1 litro = 6 metros

function apenasLatas(area) {
	const latas = Math.ceil(area / 6 / 18);
	const preco = latas * 80;

	console.log(`Você precisará de ${latas} latas`);
	console.log(`Preço: R$${preco.toFixed(2)}`);
}

function apenasGaloes(area) {
	const galoes = area / 6 / 3.6;
	const preco = galoes * 25;

	console.log(`Você precisará de ${Math.ceil(galoes)} galões`);
	console.log(`Preço: R$${preco.toFixed(2)}`);
}

function misto(area) {
	const litrosNecessarios = Math.ceil(area / 6);

	if (Math.ceil((litrosNecessarios % 18) / 3.6) >= 3) {
		const latasComprar = Math.ceil(litrosNecessarios / 18);
		const preco = latasComprar * 80;

		console.log(`você precisará de ${latasComprar} latas e de nenhum galão`);
		console.log(`Preço: R$${preco}`);
	} else {
		const latasComprar = Math.floor(litrosNecessarios / 18);
		const galoesComprar = Math.ceil((litrosNecessarios % 18) / 3.6);

		const preco = latasComprar * 80 + galoesComprar * 25;

		console.log(`você precisará de ${latasComprar} latas e ${galoesComprar} galões`);
		console.log(`Preço: R$${preco}`);
	}
}

// apenasLatas(200);
// apenasGaloes(14);
misto(160);
