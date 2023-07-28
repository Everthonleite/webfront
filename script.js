const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const idadeInput = document.getElementById("idade")
const telefoneInput = document.getElementById("telefone")
const resultado1 = document.getElementById("resultado1")
const resultado2 = document.getElementById("resultado2")
const resultado3 = document.getElementById("resultado3")

titulo.textContent = "Senai Cotia 2023"
titulo.className = "titulo"
function salvar() {

    resultado1.textContent = nomeInput.value
    resultado2.textContent = idadeInput.value
    resultado3.textContent = telefoneInput.value

}