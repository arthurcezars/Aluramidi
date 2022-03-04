function digita(tecla) {
    let digito = tecla.value;
    document.querySelector('input[type=tel]').value+= digito;
}

const listaDeTeclas = document.querySelectorAll('.teclado > input');
console.log(listaDeTeclas);

listaDeTeclas.forEach( (tecla) => {
    tecla.onclick = function(){ digita(tecla) };
})