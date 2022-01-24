const tabuada = (numero, callback) => {
    let multiplicado = 0;
    const calculo = () => {
        let resultado = numero * multiplicado;
        multiplicado++;
        if (multiplicado > 10) {
            clearInterval(id);
        }
        callback(numero, multiplicado, resultado);
    }
    const id = setInterval(calculo,);
}
tabuada(5, (numero, multiplicado, resultado) => {
    console.log(`${numero} x ${multiplicado} = ${resultado}`);
})