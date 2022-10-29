const links = document.querySelectorAll('.header-menu a');


function ativarLink(link){
  const linkLocate = window.location.href;
  if(linkLocate.includes(link.href)){
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);