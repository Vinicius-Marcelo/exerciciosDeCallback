let tempoAlarmandoEmSegundos = 10;
const alarme = new Date();
alarme.setHours(18, 45, 00);
let id;
const despertador = () => {
    console.log(`Beep beep!`);
    tempoAlarmandoEmSegundos--;
    if (tempoAlarmandoEmSegundos === 0) {
        clearInterval(id);
    }
}
const ativarAlarme = () => {
    const time = +alarme - +((new Date()).setHours(18, 44, 55));
    setTimeout(() => {
        id = setInterval(despertador, 1000);
    }, time)
}
ativarAlarme();
