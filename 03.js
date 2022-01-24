const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
let index = 0;
const tempoDaRodada = (10 / jogadores.length) * 1000;
let contador = jogadores.length - 1;
const mostrarJogadores = () => {
    console.log(jogadores[index]);
    index++;
    if (contador === 0) {
        console.log(`Final da rodada`);
        clearInterval(id)
    }
    contador--;
}
const id = setInterval(mostrarJogadores, tempoDaRodada); 