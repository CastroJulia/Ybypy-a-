const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');
const indicador = document.querySelector('.indicador');

const paginaAtual = location.pathname.split('/').pop() || 'home.html';
const ativo = [...links].find(l => l.getAttribute('href') === paginaAtual) || links[0];
ativo.classList.add('ativo');

function moverIndicador(el) {
    const navBox = nav.getBoundingClientRect();
    const box = el.getBoundingClientRect();

    indicador.style.left = (box.left - navBox.left) + 'px';
    indicador.style.top = (box.top - navBox.top) + 'px';
    indicador.style.width = box.width + 'px';
    indicador.style.height = box.height + 'px';
}


function posicionarInicial() {
    indicador.style.transition = 'none';
    moverIndicador(ativo);
    indicador.offsetWidth;          
    indicador.style.transition = '';
}

posicionarInicial();
window.addEventListener('load', posicionarInicial);   

links.forEach(link => {
    link.addEventListener('mouseenter', () => moverIndicador(link));
    link.addEventListener('focus', () => moverIndicador(link));   
});

nav.addEventListener('mouseleave', () => moverIndicador(ativo));
nav.addEventListener('focusout', () => moverIndicador(ativo));


window.addEventListener('resize', posicionarInicial);