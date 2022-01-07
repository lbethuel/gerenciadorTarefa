function main() {
  adicionarTarefa();
  feito();
}

var contador = 0;

function adicionarTarefa() {
  
  document.querySelector("#salvar").addEventListener("click", () => {
    contador++;
    var textTarefa = document.querySelector("#tarefa").value;
    const espaco = document.querySelector("#card");
    clearInput();
    espaco.innerHTML += `
                <section >
                    <div class=tarefas>
                         <p id="textTarefa_${contador}">${textTarefa}</p>
                    </div>
                    <div class="button">
                        <button type="button" id="feito_${contador}">Feito</button>
                        <button type="button" id="delete_${contador}">Excluir</button>
                        <button type="button" id="editar_${contador}">Editar</button>
                    </div>
                </section>
`;
salvarLocalStorage()
  });
  
}

function clearInput() {
  document.querySelector("#tarefa").value = "";
}

function feito() {
  let botaoSalvar = document.querySelectorAll(`.button :first-child`);
  // console.log(botaoSalvar)

  for (let i = 0; i < botaoSalvar.length; i++) {
    botaoSalvar[i].addEventListener("click", () => {
      document
        .querySelector(
          `#textTarefa_${botaoSalvar[i].getAttribute("id").split("_")[1]}`
        )
        .setAttribute("style", "text-decoration: line-through");
    });
  }
}

function salvarLocalStorage (){
  let itemAdd = document.querySelectorAll(`.tarefas :first-child`)
  
  let localAdd = document.querySelectorAll("#card");

  for (let i = 0; i < itemAdd.length; i++) {
    console.log(itemAdd[i].innerText);
  }

};

main();
