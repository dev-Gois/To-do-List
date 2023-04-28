let tarefas = [];
let idTarefa = 0;
const listaTarefas = document.getElementById("lista-tarefas");
const semTarefa = document.getElementById("semTarefa");
const form = document
  .querySelector("#inserirTarefa")
  .addEventListener("keydown", function (e) {
    let valor = document.querySelector("#inserirTarefa").value;

    if (e.key == "Enter" && valor.length !== 0) {
      e.preventDefault();
      criarTarefa(valor);
      document.getElementById("inserirTarefa").value = "";
    }
  });

class Tarefa {
  constructor(titulo) {
    this.idTarefa = idTarefa++;
    this.titulo = titulo;
  }
}

function criarTarefa(titulo) {
  let tarefa = new Tarefa(titulo);
  tarefas.push(tarefa);
  definirStyle();
  listarTarefas(tarefas);
}

function definirStyle() {
  if (tarefas.length == 0) {
    semTarefa.style.display = "block";
  } else {
    semTarefa.style.display = "none";
  }
}

function deletarTarefa(id) {
  tarefas.splice(tarefas.indexOf(id), 1);
  definirStyle();
  listarTarefas(tarefas);
}

function listarTarefas(array) {
  listaTarefas.innerHTML = "";
  array.forEach((tarefa) => {
    const novaTarefa = document.createElement("li");
    novaTarefa.innerText = tarefa.titulo;

    const botaoDeletar = document.createElement("img");
    botaoDeletar.src = "./delete.png";
    botaoDeletar.alt = "Delete";
    botaoDeletar.addEventListener("click", () => {
      deletarTarefa(tarefa.idTarefa);
      novaTarefa.remove();
    });

    novaTarefa.appendChild(botaoDeletar);
    listaTarefas.appendChild(novaTarefa);
  });
}
