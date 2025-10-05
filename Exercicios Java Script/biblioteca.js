let estoquejogos = [
    {
        titulo: "God of War",
        plataforma: "Steam",
        quantidade: 1,
    },
    {
        titulo: "Fortnite",
        plataforma: "EpicGames",
        quantidade: 1,
    },
    {
        titulo: "OverWatch",
        plataforma: "Steam",
        quantidade: 1,
    }
];

// Adicionar jogo
function adicionarjogo(titulo, plataforma, quantidade) {
    for (let jogo of estoquejogos) {
        if (jogo.titulo === titulo && jogo.plataforma === plataforma) {
            console.warn(`O jogo "${titulo}" para ${plataforma} já está em estoque.`);
            return;
        }
    }
    estoquejogos.push({ titulo, plataforma, quantidade });
    console.log(`Jogo "${titulo}" para ${plataforma} adicionado com sucesso.`);
}

// Remover jogo
function removerjogo(titulo, plataforma) {
    let indice = -1;
    for (let i = 0; i < estoquejogos.length; i++) {
        if (estoquejogos[i].titulo === titulo && estoquejogos[i].plataforma === plataforma) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        estoquejogos.splice(indice, 1);
        console.log(`Jogo "${titulo}" para ${plataforma} removido do estoque.`);
    } else {
        console.log(`Jogo "${titulo}" para ${plataforma} não encontrado.`);
    }
}

// Atualizar quantidade
function atualizarquantidade(titulo, plataforma, novaquantidade) {
    for (let jogo of estoquejogos) {
        if (jogo.titulo === titulo && jogo.plataforma === plataforma) {
            jogo.quantidade = novaquantidade;
            console.log(`Quantidade do jogo "${titulo}" para ${plataforma} atualizada para ${novaquantidade}.`);
            return;
        }
    }
    console.log(`Jogo "${titulo}" para ${plataforma} não encontrado.`);
}

// Listar jogos
function listarjogos() {
    if (estoquejogos.length === 0) {
        console.log("Estoque de jogos vazio.");
        return;
    }

    console.log("Jogos na biblioteca:");
    for (let jogo of estoquejogos) {
        console.log(`- "${jogo.titulo}" para ${jogo.plataforma} (Quantidade: ${jogo.quantidade})`);
    } 
}

// Teste
adicionarjogo("Minecraft", "Xbox", 2);
listarjogos();