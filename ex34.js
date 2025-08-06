// Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c.

// O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:

// Se o usuário informar o valor de A igual a zero, a equação não é do segundo
//     grau e o programa não deve fazer pedir os demais valores,
//     sendo encerrado;
// Se o delta calculado for negativo, a equação não possui raízes reais.
//     Informe ao usuário e encerre o programa;
// Se o delta calculado for igual a zero a equação possui apenas uma raiz
//     real; informe-a ao usuário;
// Se o delta for positivo, a equação possui duas raiz reais;
//     informe-as ao usuário; - Farta isso
// x = (-b ± √) / 2

function calcEquacao(a, b, c) {
	if (verificaEquacao(a, b, c)) {
		const delta = b ** 2 - 4 * a * c;
		if (delta < 0) {
			return 'A equação não possui raízes reais';
		} else if (delta == 0) {
			const raiz = -b / (2 * a);
			return 'A equação possui uma raiz: ' + raiz;
		} else if (delta > 0) {
			const raiz1 = -b + Math.sqrt(delta) / 2; // Falta calcular as 2 raizes
			const raiz2 = -b - Math.sqrt(delta) / 2;
			return 'A equação possui duas raízes, ' + `raiz 1: ${raiz1}, raiz 2: ${raiz2}`;
		}
	} else {
		return 'Não é equação de segundo grau';
	}
}

// Sem raiz real
console.log(calcEquacao(2, -6, 24));

// 1 raiz
console.log(calcEquacao(1, -6, 9));

// 2 raizes
console.log(calcEquacao(1, -5, 6));

function verificaEquacao(a, b, c) {
	const invalidos = [undefined, null, false, ' ', NaN];
	if (
		a == 0 ||
		invalidos.includes(Number(a)) ||
		invalidos.includes(Number(b)) ||
		invalidos.includes(Number(c))
	) {
		return false;
	} else {
		return true;
	}
}
