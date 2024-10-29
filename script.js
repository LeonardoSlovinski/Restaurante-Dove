const cardSwipper = document.querySelector(".card")
let contador = 1;

const turnCard = () => {
    cardSwipper.classList.toggle(`turn${contador}`)
    if(contador == 3) contador = 0
    contador ++
    cardSwipper.classList.toggle(`turn${contador}`)    
}

setInterval(() => {
    turnCard()
}, 5000)