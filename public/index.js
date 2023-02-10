// DROPDOWN MENU :

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const pathMenu = document.getElementById('pathMenu');

menu.addEventListener('click',()=>{
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
        pathMenu.setAttribute('d','M6 18L18 6M6 6l12 12');
    }else{
        nav.classList.add('hidden');
        pathMenu.setAttribute('d','M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5');
    }
});
