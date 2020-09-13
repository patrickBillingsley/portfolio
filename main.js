const navItems = document.querySelectorAll('.anim');

const optionsDown = {
    root: document.querySelector('body'),
    rootMargin: '-25% -75% 0px 0px',
    threshold: 0.75
};
const optionsUp = {
    root: document.querySelector('body'),
    rootMargin: '0px 0px -75% -15%',
    threshold: 0.75
}

const scrollFollowDown = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle(`nav__${entry.target.innerText}--hor`);
    });
}, optionsDown);
const scrollFollowUp = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle(`nav__${entry.target.innerText}--hor`);
    });
}, optionsUp);

navItems.forEach(navItem => {
    scrollFollowDown.observe(navItem);
    scrollFollowUp.observe(navItem);
})
