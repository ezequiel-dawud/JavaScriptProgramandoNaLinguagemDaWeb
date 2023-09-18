var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => {
        event.target.parentNode.remove()
    }, 450)
  
})

//  pacientes.forEach((paciente) => {
//      paciente.addEventListener("dblclick", () => {
//          console.log("Fui clicado com duplo click")
//          paciente.remove()
//      })
//  });