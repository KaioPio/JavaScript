const feed = [];
const feedContainer = document.getElementById("feed");

const usuario = {
  nome: "KaioDev",
  avatar: "https://i.pravatar.cc/150?img=12"
};

async function postar() {
  const texto = document.getElementById("textoPost").value.trim();
  if (!texto) return;

  const imagemGato = await buscarImagemGato();

  const novaPostagem = {
    data: new Date().toLocaleString(),
    nomeUsuario: usuario.nome,
    avatar: usuario.avatar,
    texto,
    imagem: imagemGato,
    likes: 0
  };

  feed.unshift(novaPostagem);
  document.getElementById("textoPost").value = "";
  renderizarFeed();
}

async function buscarImagemGato() {
  try {
    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
    const dados = await resposta.json();
    return dados[0].url;
  } catch (erro) {
    console.error("Erro ao buscar imagem de gato:", erro);
    return "https://placekitten.com/400/300"; // fallback
  }
}

function curtir(index) {
  feed[index].likes++;
  renderizarFeed();
}

function renderizarFeed() {
  feedContainer.innerHTML = "";

  feed.forEach((post, index) => {
    const item = document.createElement("li");

    item.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" class="avatar">
        <strong>${post.nomeUsuario}</strong> • <small>${post.data}</small>
      </div>
      <div class="post-text">${post.texto}</div>
      <img src="${post.imagem}" class="cat-img">
      <button class="like-btn" onclick="curtir(${index})">Curtir (${post.likes})</button>
    `;

    feedContainer.appendChild(item);
  });
}