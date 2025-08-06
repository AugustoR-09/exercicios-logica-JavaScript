// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.

// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:

// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.

function calcSalario() {
	const valorHora = 25;
	const horasTrabalhadas = 120;
	const salarioBruto = valorHora * horasTrabalhadas;
	const ir = salarioBruto * 0.11;
	const inss = salarioBruto * 0.08;
	const sindicato = salarioBruto * 0.05;
	const salarioLíquido = salarioBruto - ir - inss - sindicato;

	const retorno = `+ Salário Bruto : R$ ${salarioBruto.toFixed(2)}
- IR (11%) : R$ ${ir}
- INSS (8%) : R$ ${inss.toFixed(2)}
- Sindicato ( 5%) : R$${sindicato.toFixed(2)}
= Salário Liquido : R$${salarioLíquido.toFixed(2)}`;

	console.log(retorno);
}

calcSalario();
