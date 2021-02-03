//////First card heart////////////////////////////////


const  firstbtnHeart = document.querySelector(".first__btn-heart");
const  firstlikeHeart = document.querySelector(".first__like__it");
const  firstunlikeHeart = document.querySelector(".first__unlike__it");


firstbtnHeart.addEventListener('click', function(){
    firstlikeHeart.classList.toggle('now-like');
    firstunlikeHeart.classList.toggle('now-change-like')
})


// Two card heart////////////////////////////////////////
const twoBtnHeart = document.querySelector(".two__btn-heart");
const twoLikeHeart = document.querySelector(".two__like__it");
const twoUnlikeHeart = document.querySelector(".two__unlike__it");

twoBtnHeart.addEventListener('click', function(){
    twoLikeHeart.classList.toggle('now-like');
    twoUnlikeHeart.classList.toggle('now-change-like');
})


//Three card heart///////////////////////////////////////

const threeBtnHeart = document.querySelector(".three__btn-heart");
const threeLikeHeart = document.querySelector(".three__like__it");
const threeUnlikeheart = document.querySelector(".three__unlike__it");

threeBtnHeart.addEventListener('click', function(){
    threeLikeHeart.classList.toggle('now-like');
    threeUnlikeheart.classList.toggle('now-change-like');
})

//Four card heart///////////////////////////////////////

const fourBtnHeart = document.querySelector(".four__btn-heart");
const fourLikeHeart = document.querySelector(".four__like__it");
const fourUnlikeHeart = document.querySelector(".four__unlike__it");

fourBtnHeart.addEventListener('click', function(){
    fourLikeHeart.classList.toggle('now-like');
    fourUnlikeHeart.classList.toggle('now-change-like');
})

//Five card heart//////////////////////////////////////

const fiveBtnHeart = document.querySelector(".five__btn-heart");
const fiveLikeHeart = document.querySelector(".five__like__it");
const fiveUnlikeHeart = document.querySelector(".five__unlike__it");

fiveBtnHeart.addEventListener('click', function(){
    fiveLikeHeart.classList.toggle('now-like');
    fiveUnlikeHeart.classList.toggle('now-change-like');
})