function tocaSom(tecla) {
    let idAudio = `#som_${tecla}`;

    elemento = document.querySelector(idAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach( (tecla) => {
    tecla.onclick = function() { tocaSom(tecla.classList[1]); }

    tecla.onkeydown = function(evento) { 
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function() { tecla.classList.remove('ativa'); }
})