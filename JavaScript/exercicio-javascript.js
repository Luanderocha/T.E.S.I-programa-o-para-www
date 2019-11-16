/*  EXERCÍCIO_JAVASCRIPIT
EQUIPE = LUANDERSON && HUMBERTO */

const COR_VERDE = '#66DD66';
const COR_VERMELHA = '#E61919';
const VERMELHO_CLARO = '#ff4040';
const COR_AZUL = '#5190c6';

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

const MIN_VALOR = 0;
const MAX_VALOR = 99;

function validarCampoNumerico() {
    let valor = document.getElementById('campoNumerico').value;
    valor = parseInt(valor);
    let novoCampo = document.createElement('div');
    novoCampo.setAttribute('id', 'novoCampo');
    if (!valor && valor !== 0) {
        let validacaoTexto = document.createTextNode('Campo deve ser numérico');
        novoCampo.appendChild(validacaoTexto);
        if (!document.getElementById('novoCampo')) {
            document.getElementById('validacao').appendChild(novoCampo);
        } else {
            let campo = document.getElementById('novoCampo');
            campo.replaceChild(novoCampo, campo.childNodes[0]);
        }
        document.getElementById('novoCampo').style.color = COR_VERMELHA;
    } else if (valor < MIN_VALOR || valor > MAX_VALOR) {
        let validacaoNumerica = document.createTextNode(
            'O valor deve estar contido no intervalo entre 0 e 99'
        );
        novoCampo.appendChild(validacaoNumerica);
        if (!document.getElementById('novoCampo')) {
            document.getElementById('validacao').appendChild(novoCampo);
        } else {
            let campo = document.getElementById('novoCampo');
            campo.replaceChild(novoCampo, campo.childNodes[0]);
        }
        document.getElementById('novoCampo').style.color = COR_VERMELHA;
    } else {
        if (document.getElementById('novoCampo')) {
            document.getElementById('novoCampo').remove();
        }
    }
}

let cont = 1;

function gerarDivs() {
    let novaDiv = document.createElement('div');
    let valor = document.createTextNode(cont);
    novaDiv.appendChild(valor);
    cont++;
    document.getElementById('novasDivs').appendChild(novaDiv);
}

let cont2 = 1;

function incrementar() {
    let campo = document.getElementById('incremento');
    campo.innerHTML = cont2;
    cont2++;
}

function modificarImagem() {
    let imagem = document.getElementById('imagem');
    imagem.src =
        'https://upload.wikimedia.org/wikipedia/pt/e/ea/UNIFACISA_Basquete.png';
}

const TAM_INICIAL = 17;
let tamanhoFonte = TAM_INICIAL;

function aumentar() {
    tamanhoFonte++;
    document.getElementById('redimensionado').style.fontSize =
        tamanhoFonte + 'px';
}

function diminuir() {
    tamanhoFonte--;
    document.getElementById('redimensionado').style.fontSize =
        tamanhoFonte + 'px';
}

function auterarCorCampo() {
    let campo = document.getElementById('ValidaCampoVazio');
    if (!campo.value) {
        campo.style.backgroundColor = VERMELHO_CLARO;
    } else {
        campo.style.backgroundColor = null;
    }
}

const VERDE_LIMAO = '#7cfc00';

function auterarCorDiv() {
    let div = document.getElementById('modificaCorDiv');
    div.style.backgroundColor = VERDE_LIMAO;
}

function selecionarCor() {
    let opcao = document.getElementById('selecionaOpcao').value;
    if (opcao === 'vermelho') {
        document.getElementById(
            'selecionarCor'
        ).style.backgroundColor = VERMELHO_CLARO;
    } else if (opcao === 'verde') {
        document.getElementById('selecionarCor').style.backgroundColor = COR_VERDE;
    } else if (opcao === 'azul') {
        document.getElementById('selecionarCor').style.backgroundColor = COR_AZUL;
    }
}

function redimencionar() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    document.querySelector(
        '#redimenciona'
    ).innerHTML = `largura: ${windowWidth} X Altura: ${windowHeight}`;
}
redimencionar();

window.addEventListener('resize', function() {
    redimencionar();
});

function validarForm() {
    let form = document.getElementById('formulario').elements;
    let nomeValidado = this.validarNome(form);
    let radioValidado = this.validarRadio(form);
    let checkValidado = this.validarCheckbox(form);
    if (nomeValidado && radioValidado && checkValidado) {
        document.getElementById('formulario').submit();
    }
}

function validarNome(form) {
    let validaCampo = document.getElementById('validaNome');
    let validado = false;
    if (!form.campoNome.value) {
        validaCampo.innerHTML = 'Preencha o campo !';
        validaCampo.style.color = COR_VERMELHA;
    } else {
        validaCampo.innerHTML = null;
        validado = true;
    }
    return validado;
}

function validarRadio(form) {
    let validaRadio = document.getElementById('validaRadio');
    let validado = false;
    if (!form.ling_prog.value) {
        validaRadio.innerHTML = 'Selecione uma opção !';
        validaRadio.style.color = COR_VERMELHA;
    } else {
        validaRadio.innerHTML = null;
        validado = true;
    }
    return validado;
}

function validarCheckbox(form) {
    let validaCheck = document.getElementById('validaCheckbox');
    let validado = false;
    if (!form.check.checked) {
        validaCheck.innerHTML = 'Seleciona a opção !';
        validaCheck.style.color = COR_VERMELHA;
    } else {
        validaCheck.innerHTML = null;
        validado = true;
    }
    return validado;
}

function validarCaractere() {
    let campo = document.getElementById('validaCaractere').value;
    let cont = 0;
    for (var i = 0; i < campo.length; i++) {
        if (campo[i] === '@') {
            cont++;
        }
    }
    let novaDiv = document.createElement('div');
    novaDiv.setAttribute('id', 'campoValidacao');
    if (cont === 1) {
        let texto = document.createTextNode('ERRO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERMELHA;
        validarCampoPreenchido(novaDiv);
    } else if (!campo) {
        let texto = document.createTextNode('CAMPO VAZIO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERMELHA;
        validarCampoPreenchido(novaDiv);
    } else {
        let texto = document.createTextNode('SUCESSO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERDE;
        validarCampoPreenchido(novaDiv);
    }
}

function validarCampoPreenchido(novaDiv) {
    if (!document.getElementById('campoValidacao')) {
        document.getElementById('caractereEspecial').appendChild(novaDiv);
    } else {
        let campoAtual = document.getElementById('campoValidacao');
        campoAtual.replaceChild(novaDiv, campoAtual.childNodes[0]);
    }
}