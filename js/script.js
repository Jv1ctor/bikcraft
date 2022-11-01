// ativar links menu
const links = document.querySelectorAll('.header-menu a');


function ativarLink(link){
  const linkLocate = window.location.href;
  if(linkLocate.includes(link.href)){
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);

// ativo itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarItem(item){
  const elemento = document.getElementById(item);
  if(elemento){
    elemento.checked = true;
  }
}
parametros.forEach(ativarItem);

// perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(itemP){
  function ativoResposta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);


    resposta.classList.toggle("ativo-pergunta");
    const ativo = resposta.classList.contains("ativo-pergunta")
    pergunta.setAttribute("aria-expanded", ativo);
  }

  itemP.addEventListener("click",ativoResposta)
}
perguntas.forEach(ativarPergunta);