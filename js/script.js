let buttonMobile = document.getElementById ('button-mobile'),
navBar = document.getElementById ('nav-bar')

buttonMobile.addEventListener ('click', () => {
    navBar.classList.toggle ('show-menu-close')
})