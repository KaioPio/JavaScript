let tarefas = [];

function carregarTarefas() {
  const dadosSalvos = localStorage.getItem("tarefas");
  tarefas = dadosSalvos ? JSON.parse(dadosSalvos) : [];
  renderizarTarefas();
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa() {
  const input = document.getElementById("descricao");
  const descricao = input.value.trim();

  if (descricao) {
    tarefas.push({ descricao, status: false });
    salvarTarefas();
    renderizarTarefas();
    input.value = "";
  }
}

function alternarStatus(index) {
  tarefas[index].status = !tarefas[index].status;
  salvarTarefas();
  renderizarTarefas();
}

function excluirTarefa(index) {
  tarefas.splice(index, 1);
  salvarTarefas();
  renderizarTarefas();
}

function renderizarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;
    checkbox.onclick = () => alternarStatus(index);

    const texto = document.createElement("span");
    texto.textContent = tarefa.descricao;
    texto.className = tarefa.status ? "tarefa-concluida" : "tarefa-pendente";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = () => excluirTarefa(index);

    item.appendChild(checkbox);
    item.appendChild(texto);
    item.appendChild(botaoExcluir);
    lista.appendChild(item);
  });
}

carregarTarefas();