var pacientes = document.querySelectorAll(".paciente")
var botaoAdicionar = document.querySelector("#adicionar-paciente")

for (var i = 0; i < pacientes.length; i++){
var paciente = pacientes[i]
var tdAltura = paciente.querySelector('.info-altura')
var tdPeso = paciente.querySelector('.info-peso')
var tdImc = paciente.querySelector('.info-imc')

var altura = tdAltura.textContent
var peso = tdPeso.textContent
var imc = peso / (altura*altura)

if (peso <= 0 || peso >= 250){
    tdImc.textContent ="Peso inválido!"
    paciente.classList.add(".paciente-inválido")
} else if (altura <= 0 || altura >= 2.5) {
    tdImc.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido")

} else {
    tdImc.textContent = imc.toFixed(2)
}
}

console.log(botaoAdicionar)
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault()
    console.log("IOLALA")
})

