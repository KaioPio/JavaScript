function calculartemprestante(datafutura) { 
    const agora = new Date();
    const temporestante = datafutura - agora;
    
    // Conversão de milisegundos

    const segundos = Math.floor((temporestante / 1000) % 60);
    const minutos = Math.floor((temporestante / 1000 / 60 ) % 60);
    const horas = Math.floor((temporestante / (1000 * 60 * 60 )) % 24);
    const dias = Math.floor(temporestante / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos}
}

// Atualizar o temporizador 

function atualizatemporizador() {
    const datafutura = new Date("2025-11-13T14:24:52");
    const tempo = calculartemprestante(datafutura);
    console.clear(); // limpa o terminal a cada segundo
    console.log(`Tempo restante: ${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`);
}

setInterval(atualizatemporizador, 1000);
