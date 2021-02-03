const firstCardStarOne = document.querySelector(".one-star-first-card");
const firstCardStarTwo = document.querySelector(".two-star-first-card");
const firstCardStarThree = document.querySelector(".three-star-first-card");
const firstCardStarFour = document.querySelector(".four-star-first-card");
const firstCardStarFive = document.querySelector(".five-star-first-card");
const btnFirstCard = document.querySelector(".btn-star");

btnFirstCard.addEventListener('click', function{
    firstCardStarOne.classList.toggle("good");
    firstCardStarTwo.classList.toggle("bad");
    firstCardStarThree.classList.toggle("bad");
    firstCardStarFour.classList.toggle("bad");
    firstCardStarFive.classList.toggle("bad");
})