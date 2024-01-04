function ativaLetra(elemento, texto) {
    elemento.innerHTML = '';
    let index = 0;

    function escrever() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escrever, 100);
        } else {
            setTimeout(apagar, 1000);
        }
    }

    function apagar() {
        if (elemento.innerHTML.length > 0) {
            elemento.innerHTML = elemento.innerHTML.slice(0, -1);
            setTimeout(apagar, 100);
        } else {
            index = 0;
            setTimeout(escrever, 1000);
        }
    }

    escrever();
}

const titulo = document.querySelector('.typing');
const textoOriginal = titulo.innerHTML;
ativaLetra(titulo, textoOriginal);