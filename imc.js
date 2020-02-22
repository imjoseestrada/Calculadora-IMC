var peso, altura

var establecerDatos = function(){
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
}

function calcular() {
    imc = peso / Math.pow(altura, 2)
}

function obtenerResultado() {
    establecerDatos()
    calcular()
    var resultado = document.getElementsByClassName('resultado')[0]

    if (imc<18.5) {
        resultado.innerHTML = '<label>Peso inferior al normal</label>'
    } else if ((imc >= 18.5) && (imc < 25)) {
        resultado.innerHTML = '<label>Normal</label>'
    } else if ((imc >= 25) && (imc < 30)) {
        resultado.innerHTML = '<label>Peso superior al normal</label>'
    } else if (imc >= 30) {
        resultado.innerHTML = '<label>Obesidad</label>'
    }
}