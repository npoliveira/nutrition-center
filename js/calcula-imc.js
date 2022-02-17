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

    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("dado-invalido");
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida!"
        paciente.classList.add("dado-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) { // function extraida para ser usada em outra parte do codigo

    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
