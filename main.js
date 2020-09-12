const navItems = document.querySelectorAll('.anim');

const options = {
    root: document.querySelector('body'),
    rootMargin: '-25% 0px 0px 0px'
};

const scrollFollow = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle(`nav__${entry.target.innerText}--hor`);
    })
}, options);

navItems.forEach(navItem => {
    scrollFollow.observe(navItem);
})