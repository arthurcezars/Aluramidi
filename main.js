function tocaSom(tecla) {
    let idAudio = '#som_tecla_';

    let nomeSom = tecla.innerHTML.toLowerCase();
    idAudio += nomeSom;

    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach( (tecla) => {
    tecla.onclick = function() { tocaSom(tecla) };
})