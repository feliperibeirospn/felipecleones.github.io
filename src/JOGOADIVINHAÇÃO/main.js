const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset =document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAteempts = 1

//events
btnTry.addEventListener(`click`, handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)

//função callback
function handleTryClick(event) {
    event.preventDefault() //siginifica Não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value)== randomNumber ){
        toggleScreen()
        document
        .querySelector(".screen2 h2")
        .innerText =`Você acertou em  ${xAteempts} Tentativas`
    }

    inputNumber.value = ""
    xAteempts++
}

function handleResetClick(){
    toggleScreen()
    xAteempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}