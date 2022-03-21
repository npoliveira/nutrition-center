let titulo = document.querySelector(".titulo");
titulo.textContent = "Oliveira Nutrition Center";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("dado-invalido");
    }
    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida!"
        paciente.classList.add("dado-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) { // function extraida para ser usada em outra parte do codigo

    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
