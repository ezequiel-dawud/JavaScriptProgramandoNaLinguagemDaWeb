var botaoAdicionar = document.querySelector("#buscar-paciente")
botaoAdicionar.addEventListener("click", () => {
    console.log("buscando pacientes")

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")

    xhr.addEventListener("load", () => {
        var erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel")
        }

    })

    xhr.send()
})

