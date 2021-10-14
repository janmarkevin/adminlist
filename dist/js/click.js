let menu = document.querySelector('.header__menu-wrapper');
let menuOpen = false;
let menuContent = document.querySelector('.header__menu-nav');
menu.addEventListener('click',()=>{
   if (!menuOpen) {
      menu.classList.add('open');
      menuOpen = true;
   } else {
      menu.classList.remove('open');
      menuOpen = false;
   }

   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
});