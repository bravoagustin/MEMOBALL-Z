const cards = document.querySelectorAll(".memory-card");

let lockBoard = false;
let start = false;
let firstCard, secondCard;

function rotate(){
    if (lockBoard) return;

    if(this === firstCard) return;

    this.classList.add("rotate");

    if (!start) {
        start = true;
        firstCard = this;

     return;
    }
    start = false;
    secondCard = this;
    console.log(lockBoard);

    checkMatch();
}

function resetVariable(){
    firstCard = null;
    secondCard = null;
    // lockBoard = false;
    // start = false;
}

function checkMatch(){
    let match = 
        firstCard.dataset.fighter === secondCard.dataset.fighter;

    match ? disableCards() : returnCards();
}

function disableCards(){
    firstCard.removeEventListener("click", rotate);
    secondCard.removeEventListener("click", rotate);
    resetVariable();
}
    
function returnCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("rotate");
        secondCard.classList.remove("rotate");
        lockBoard = false;
        resetVariable();
    }, 700);
}

function cardsClick(){
    cards.forEach((card) => card.addEventListener("click", rotate));
    mixCards();
}

cardsClick();

//haciendo el random 

function mixCards(){
    cards.forEach((card) => {
        let numeroRandom = Math.floor(Math.random() * 12);
        card.style.order = numeroRandom;
    });
}