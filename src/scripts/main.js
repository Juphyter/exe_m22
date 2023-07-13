AOS.init();

const dataDoEvento = new Date("Jul 20, 2023 20:00:00"); // pegar a data do evento futuro
const timeStampDoEvento = dataDoEvento.getTime(); // pegar o time

const contaAsHoras = setInterval(function() {
    const agora = new Date(); // pegar a data atual
    const timeStampAtual = agora.getTime(); // pegar o time da data atual

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // fazer a subtraçao do dia futuro pelo atual, para obter o tempo ate o dia chegar

    const diaEmMs = 1000 * 60 * 60 * 24; // conta de 1 dia em milessegundos
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) { // para quando o evento passar da data
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);