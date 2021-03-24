






const overlay = document.querySelector('#overlay');
const closeMenu = document.querySelector("#close-menu");
const openMenu = document.querySelector('#open-menu');
const navigation = document.querySelector('.navigation')


openMenu.addEventListener('click', function(){
    overlay.classList.add('show-menu');

})

closeMenu.addEventListener('click', function(){
    overlay.classList.remove('show-menu');
})



//const  downlink = document.querySelector('.product__down');
//const  submenu = document.querySelector('.product__submenu');

//downlink.addEventListener('click', function(){
//    submenu.classList.toggle('online__submenu');
//})