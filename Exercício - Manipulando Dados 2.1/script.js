async function buscarUsuarios() {
  const termo = document.getElementById("campoBusca").value.trim();
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = ""; // Limpa resultados anteriores

  if (!termo) {
    alert("Digite um nome para buscar.");
    return;
  }

  try {
    const resposta = await fetch(`https://api.github.com/search/users?q=${termo}`);
    const dados = await resposta.json();

    if (dados.items && dados.items.length > 0) {
      dados.items.forEach(usuario => {
        const item = document.createElement("li");
        item.innerHTML = `
          <strong>${usuario.login}</strong><br>
          <a href="${usuario.html_url}" target="_blank">${usuario.html_url}</a>
        `;
        lista.appendChild(item);
      });
    } else {
      lista.innerHTML = "<li>Não foram encontrados usuários para esta pesquisa.</li>";
    }
  } catch (erro) {
    console.error("Erro ao buscar usuários:", erro);
    lista.innerHTML = "<li>Erro ao buscar usuários. Tente novamente mais tarde.</li>";
  }
}
