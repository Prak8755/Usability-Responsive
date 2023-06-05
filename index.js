const toggleMenu=document.querySelector('.toggle-menu');
const navLinks=document.querySelector('.nav-links');
const header=document.querySelector('.header-section')

toggleMenu.addEventListener('click',function(){
navLinks.classList.toggle('active');
header.classList.toggle('header-active')
})