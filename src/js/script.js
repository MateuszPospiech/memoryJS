//Game logic
const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "coral", "coral", "cyan", "cyan"];

let cards = document.querySelectorAll(".card");
cards = [...cards]; //transform to Array

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2;
let gameResolut = 0;

const clickCard = function(){

    activeCard = this;

    if (activeCard == activeCards[0]) return; //If user clicked secound times on the same element DO NOTHING

    activeCard.classList.remove("hidden");

    if(activeCards.length === 0){
        activeCards[0] = activeCard;
        return;
    }
    else{
        cards.forEach(card => {
            card.removeEventListener("click", clickCard);
        })
        activeCards[1] = activeCard;

        setTimeout(function() {
            if (activeCards[0].className == activeCards[1].className) {
                activeCards.forEach(card => card.classList.add("off"))
                gameResolut++;
                cards = cards.filter(card => !card.classList.contains("off")); //False for all elements with class off to unable clicked again on OFF elements
                if (gameResolut == gamePairs){
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime)/1000;
                    alert(`You won! Your time: ${gameTime} sec.`);
                    location.reload();
                }
            }
            else{
                activeCards.forEach(card => card.classList.add("hidden"))
            }
        
            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => {
                card.addEventListener("click", clickCard)
            })
        }, 400)
    }
}

const init = function() {
    cards.forEach(card => {
        const position = Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1) //delete element from Array
    })

        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener("click", clickCard)
        })
}
init()

//Buttons
let newGame = document.querySelector('.newGame');

let startGame = function() {
    
    let menu = document.querySelector('.menu');
    menu.classList.add("menu-off");
}

newGame.addEventListener("click", startGame);