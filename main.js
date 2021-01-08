window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const navItems = document.querySelectorAll('.anim');
const aboutItems = document.querySelectorAll('.about__card');

const optionsDown = {
    root: document.querySelector('body'),
    rootMargin: '-20% -75% 0px 0px',
    threshold: 0.5
};
const optionsUp = {
    root: document.querySelector('body'),
    rootMargin: '0px 0px -80% -15%',
    threshold: 0.5
};
const appearOptions =  {
    threshold: 0.25
};

const scrollFollowDown = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle(`nav__${entry.target.innerText}--hor`);
    });
}, optionsDown);
const scrollFollowUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle(`nav__${entry.target.innerText}--hor`);
    });
}, optionsUp);
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);


navItems.forEach(item => {
    scrollFollowDown.observe(item);
    scrollFollowUp.observe(item);
});
aboutItems.forEach(item => {
    appearOnScroll.observe(item);
});