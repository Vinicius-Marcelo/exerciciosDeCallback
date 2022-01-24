const { format } = require('date-fns');
let alarme = new Date().setHours(18, 45, 00);
let tempoAlarmandoEmSegundos = 10;
let tempoSonecaEmSegundos = 10;
let id;
let time;
let dataAtual = new Date(alarme);
const despertador = () => {
    console.log(`Beep beep!`);
    tempoAlarmandoEmSegundos--;
    if (tempoAlarmandoEmSegundos === 0) {
        console.log(`Soneca ativada, próximo alarme às: ${format(alarme, `HH:mm:ss`)}`);
        clearInterval(id);
        time = ((+alarme - +(new Date()).setHours(18, 44, 55)) + 5000)
        setTimeout(() => {
            id = setInterval(tempoDeSoneca, 1000);
        }, time)
    }
}
const tempoDeSoneca = () => {
    console.log(`Beep beep!`);
    tempoSonecaEmSegundos--;
    if (tempoSonecaEmSegundos === 0) {
        dataAtual.setSeconds((dataAtual.getSeconds() + 20));
        console.log(`Soneca ativada, próximo alarme às: ${format(dataAtual, `HH:mm:ss`)}`);
        clearInterval(id);
        setTimeout(chamarTempoDeSoneca, 1000)
    }
}
const chamarTempoDeSoneca = () => {
    tempoSonecaEmSegundos = 10;
    time = (+alarme + 10000) - +alarme;
    setTimeout(() => {
        id = setInterval(tempoDeSoneca, 1000);
    }, time)
}
const ativarAlarme = () => {
    time = +alarme - +((new Date()).setHours(18, 44, 55));
    setTimeout(() => {
        id = setInterval(despertador, 1000);
    }, time)
}
ativarAlarme();