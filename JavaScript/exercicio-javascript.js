/*  EXERCÍCIO_JAVASCRIPIT
  EQUIPE = LUANDERSON && HUMBERTO */
const COR_VERDE = '#66DD66';

function escondermostrar() {
    let div = document.getElementById('esconderMostrar');
    if (div.innerHTML) {
        div.innerHTML = '';
    } else {
        div.innerHTML = 'Essa div deve sumir e aparecer';
    }
}

function modificaCor() {
    document.getElementById('mudaCor').style.color = COR_VERDE;
}

function retornaCor() {
    document.getElementById('mudaCor').style.color = '#000000';
}

function upperCase() {
    let letras = document.getElementById('letras');
    letras.value = letras.value.toUpperCase();
}

function lowerCase() {
    let letras = document.getElementById('letras');
    letras.value = letras.value.toLowerCase();
}

function modificarLetras() {
    let letras = document.getElementById('textoUpper');
    letras.value = letras.value.toUpperCase();
}