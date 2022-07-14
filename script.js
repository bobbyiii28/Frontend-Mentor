const navMenu = document.getElementById('menu')
const mobileNav = document.querySelector('.mobile-nav')



navMenu.addEventListener('click', function () {
    mobileNav.classList.toggle('show')
    console.log('clicked')


})