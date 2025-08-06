// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.

// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante :
//     aumento de 5% Após o aumento ser realizado,
// informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

function ajustarSalario(salarioAntigo) {
	if (salarioAntigo <= 0) {
		console.log('Como q o caboco ganha um salário negativo?');
	} else if (salarioAntigo <= 280) {
		const novoSalario = salarioAntigo + salarioAntigo * 0.2;
		const valorAumento = novoSalario - salarioAntigo;
		mostrarValores(salarioAntigo, 20, valorAumento, novoSalario);
	} else if (salarioAntigo <= 700) {
		const novoSalario = salarioAntigo + salarioAntigo * 0.15;
		const valorAumento = novoSalario - salarioAntigo;
		mostrarValores(salarioAntigo, 15, valorAumento, novoSalario);
	} else if (salarioAntigo <= 1500) {
		const novoSalario = salarioAntigo + salarioAntigo * 0.1;
		const valorAumento = novoSalario - salarioAntigo;
		mostrarValores(salarioAntigo, 10, valorAumento, novoSalario);
	} else if (salarioAntigo > 1500) {
		const novoSalario = salarioAntigo + salarioAntigo * 0.05;
		const valorAumento = novoSalario - salarioAntigo;
		mostrarValores(salarioAntigo, 5, valorAumento, novoSalario);
	}
}

ajustarSalario(1501);

function mostrarValores(salarioAntigo, percentual, valorAumento, novoSalario) {
	const res = `   Salário antes do ajuste: R$${salarioAntigo.toFixed(2)}
   Percentual de aumento: ${percentual}%
   Valor do aumento: R$${valorAumento.toFixed(2)}
   Novo salário: R$${novoSalario.toFixed(2)}
      `;

	console.log(res);
}
