const pessoasQueCurtiram = [];

function curtir() {
  const nomeInput = document.getElementById("nomeInput");
  const nome = nomeInput.value.trim();

  if (nome && !pessoasQueCurtiram.includes(nome)) {
    pessoasQueCurtiram.push(nome);
  }

  atualizarParagrafo();
  nomeInput.value = "";
}

function atualizarParagrafo() {
  const resultado = document.getElementById("resultado");
  const total = pessoasQueCurtiram.length;

  if (total === 0) {
    resultado.textContent = "Ninguém curtiu";
  } else if (total === 1) {
    resultado.textContent = `${pessoasQueCurtiram[0]} curtiu`;
  } else if (total === 2) {
    resultado.textContent = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram`;
  } else {
    resultado.textContent = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${total - 2} pessoas curtiram`;
  }
}

function apagarnomes() {
  sessionStorage.clear();
  location.reload();
  alert("Session Storage limpo!");
}
