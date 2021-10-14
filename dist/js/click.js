let menu = document.querySelector('.header__menu-wrapper');
let menuContent = document.querySelector('.header__menu-nav');
menu.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})