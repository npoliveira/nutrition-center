let buttonAdicionar = document.querySelector("#buscar-pacientes");

buttonAdicionar.addEventListener("click", function () {
    console.log("buscando pacientes....");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        if (xhr.status = 200) {
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();

});

