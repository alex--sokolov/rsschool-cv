const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburger__line');
const navigation = document.querySelector('.navigation');

const links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerLine.classList.remove('hamburger__line_active');
        navigation.classList.remove('navigation_hamburger-active');
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.contains(navigation)) {

        if (!event.target.contains(hamburger) && !event.target.classList.contains('hamburger__line')) {
            hamburgerLine.classList.remove('hamburger__line_active');
            navigation.classList.remove('navigation_hamburger-active');
        }
        else if (event.target.classList.contains('hamburger__line') || event.target.contains(hamburger)) {
            hamburgerLine.classList.toggle('hamburger__line_active');
            navigation.classList.toggle('navigation_hamburger-active');
        }
    }
});
