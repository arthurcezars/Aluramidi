function tocaSom(tecla) {
    let idAudio = `#som_${tecla}`;

    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach( (tecla) => {
    tecla.onclick = function() { tocaSom(tecla.classList[1]) };
})