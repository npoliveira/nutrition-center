let campoFiltro = document.querySelector("#filtrar-tabela");
// let campoFiltro = document.getElementById("filtrar-tabela");
campoFiltro.addEventListener("input", filtrar);

let limpar = document.getElementById("limpar-filtro");
limpar.addEventListener("click", limparFiltro);

function limparFiltro() {
    campoFiltro.value = "";
    filtrar();
}

function filtrar() {
    // Get the rows of patients
    let pacientes = document.querySelectorAll(".paciente");
    // let pacientes = document.getElementsByClassName("paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            // let tdNome = paciente.getElementsByTagName('info-nome');
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
};