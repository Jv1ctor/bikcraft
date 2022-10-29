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