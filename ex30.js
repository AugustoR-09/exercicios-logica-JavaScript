// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

// Desconto do IR: Salário Bruto até 900 (inclusive) - isento Salário Bruto até 1500 (inclusive) - desconto de 5% Salário Bruto até 2500 (inclusive) - desconto de 10% Salário Bruto acima de 2500 - desconto de 20%

// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//     Salário Bruto: (5 * 220)        : R$ 1100,00
//     (-) IR (5%)                     : R$   55,00
//     (-) INSS ( 10%)                 : R$  110,00
//     FGTS (11%)                      : R$  121,00
//     Total de descontos             : R$  165,00
//     Salário Liquido                 : R$  935,00

const valorHora = 20;
const horasTrabalhadas = 120;

function calcularImpostos() {
	if (!verificarVeracidade) {
		console.error('Valores incorretos');
		return;
	}
	const salarioBruto = valorHora * horasTrabalhadas;
	const IR = calcularIR(salarioBruto);
	const INSS = salarioBruto * 0.1;
	const FGTS = salarioBruto * 0.11;
	const TotalDescontos = IR + INSS;
	const salarioLíquido = salarioBruto - (IR + INSS);

	const retorno = `Salário Bruto:                  : R$ ${salarioBruto
		.toFixed(2)
		.replace('.', ',')}
IR (5%)                         : R$ ${IR.toFixed(2).replace('.', ',')}
INSS ( 10%)                     : R$ ${INSS.toFixed(2).replace('.', ',')}
FGTS (11%)                      : R$ ${FGTS.toFixed(2).replace('.', ',')}
Total de descontos              : R$ ${TotalDescontos.toFixed(2).replace('.', ',')}
Salário Liquido                 : R$ ${salarioLíquido.toFixed(2).replace('.', ',')} `;
	console.log(retorno);
}

calcularImpostos();

function verificarVeracidade() {
	return valorHora > 0 && horasTrabalhadas > 0;
}

function calcularIR(salario) {
	if (salario <= 900) {
		return salario;
	} else if (salario <= 1500) {
		return salario * 0.05;
	} else if (salario <= 2500) {
		return salario * 0.1;
	} else {
		return salario * 0.2;
	}
}
