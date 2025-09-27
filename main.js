console.log("gato 🐱")


const gato = [{"nome": "gato", "raça": "preto"},{"nome": "Fufi", "raça": "colorido"}]
const var1 = 4
const var2 = 6

const displayGato = document.querySelector(".nome-gato")
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")

const page = document.querySelector("html")

button1.addEventListener("click", shrinkButton)
button2.addEventListener("click", shrinkButton2)

function Soma(n1,n2){
    return n1+n2
}

function shrinkButton(event){
    console.log(event)
    displayGato.textContent = `${gato[0].nome} ${Soma(var1,var2)}`
    page.classList.toggle("classe-toggle")
}

function shrinkButton2(event){
    console.log(event)
    displayGato.textContent = `${gato[1].nome} ${Soma(var1,var2)}`
    page.classList.toggle("classe-toggle")
}

console.log(gato, var1)

console.log(gato.nome)

console.log(Soma(var1,var2))

console.log(displayGato)

console.log()


// if button.onmouseover
//     displayGato.innerText = "gato legal"
