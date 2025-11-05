let tarefas = [];

function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const descricao = input.value.trim();
  if (descricao === '') return;

  tarefas.push({ descricao, status: false });
  input.value = '';
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('listaTarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.onchange = () => {
      tarefa.status = checkbox.checked;
      atualizarLista();
    };

    const texto = document.createElement('span');
    texto.textContent = tarefa.descricao;
    texto.className = tarefa.status ? 'tarefa-concluida' : 'tarefa-pendente';

    item.appendChild(checkbox);
    item.appendChild(texto);
    lista.appendChild(item);
  });
}