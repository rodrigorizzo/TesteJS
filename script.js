let mult;
let numPrincipal;
let unidade;
let decimal;
let centesimal;
let milhar;
let resultado;

const enviarBotao = document.getElementById('concluir');
const randomBotao = document.getElementById('random')
const caixaResposta = document.getElementById('resposta')

function registrarNum() {
    mult = document.getElementById("mult").value;
    unidade = document.getElementById("unidade").value;
    decimal = document.getElementById("decimal").value;
    centesimal = document.getElementById("centesimal").value;
    milhar = document.getElementById("milhar").value;

    numPrincipal = "0" + milhar + centesimal + decimal + unidade;
    resultado = parseInt(numPrincipal) * mult;

    document.getElementById("resultado").innerText = "O resultado de " + numPrincipal + " X " + mult + " é igual a " + resultado;

}

function randomNum() {
    document.getElementById("unidade").value = Math.floor(Math.random() * 10);
    decimal = document.getElementById("decimal").value = Math.floor(Math.random() * 10);
    centesimal = document.getElementById("centesimal").value = Math.floor(Math.random() * 10);
    milhar = document.getElementById("milhar").value = Math.floor(Math.random() * 10);
}

function adicionarNum (event){
    let key = event.key;


}

enviarBotao.addEventListener("click", registrarNum);
randomBotao.addEventListener("click", randomNum);
// caixaResposta.addEventListener(onkeydown, adicionarNum(onkeydown))

caixaResposta.addEventListener("beforeinput", function(e) {
    const nextVal = 
      e.target.value.substring(0, e.target.selectionStart) +
      (e.data ?? '') +
      e.target.value.substring(e.target.selectionEnd)
    ;
    if(!/^(\d{0,7}|)$/.test(nextVal)) {
        e.preventDefault();
    }
});