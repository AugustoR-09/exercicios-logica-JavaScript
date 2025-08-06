// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

const tamanhoArquivo = 505;
const velocidade = 6345;
function calcTempo(mb, mbps) {
	return `O arquivo vai levar ${Math.ceil(mb / mbps / 60)} minuto(s) para ser baixado`;
}

console.log(calcTempo(800, 50));
