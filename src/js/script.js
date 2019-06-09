const cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "coral", "coral", "cyan", "cyan"];

let cards = document.querySelectorAll(".card");
cards = [...cards]; //transform to Array

const clickCard = function(){
    console.log("click");
}

const init = function() {
    cards.forEach(function(card){
        const position = Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1) //delete element from Array
    })

    setTimeout(function(){
        cards.forEach(function(card){
            card.classList.add("hidden");
            card.addEventListener("click", clickCard)
        })
    }, 2000)
}

init()