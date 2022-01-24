const tabuada = (arrayNumero, callback) => {
    let multiplicado = 0;
    for (let i = 0; i <= 11; i++) {
        if (i === 11) {
            multiplicado++;
            i = 0;
            if (multiplicado > arrayNumero.length - 1) {
                break;
            }
            console.log(`---------------`);
        }
        callback(`${arrayNumero[multiplicado]} x ${i} = ${arrayNumero[multiplicado] * i}`);
    }
}; tabuada([1, 5, 2], (resultado) => {
    console.log(resultado);
})