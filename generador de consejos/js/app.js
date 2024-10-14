const texto = document.querySelector('#consejo');
const numeracion = document.querySelector('#numeracion');
const btn = document.querySelector('#btn');

btn.addEventListener('click', buscarConsejo);

function buscarConsejo() {
    url = '	https://api.adviceslip.com/advice';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarConsejo(resultado.slip))
        .catch(error => console.log(error))
}

function mostrarConsejo(consejo) {
    const {id, advice} = consejo;

    console.log(id);
    console.log(advice);
    console.log(consejo);

    texto.textContent = advice;
    numeracion.innerHTML = `Advice #${id}`;
}