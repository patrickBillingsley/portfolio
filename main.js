window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const home = document.querySelector('.home');
const navBarHor = document.querySelector('.nav-bar-hor');
const aboutItems = document.querySelectorAll('.about__card');

const navOptions = {
    threshold: 0.05
};
const appearOptions =  {
    threshold: 0.25
};

const navChange = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(!navBarHor.className.includes('nav-bar-hor--hidden')) {
                navBarHor.classList.add('nav-bar-hor--hidden');
            }
            return;
        }
        if(!entry.isIntersecting) {
            if(navBarHor.className.includes('nav-bar-hor--hidden')) {
                navBarHor.classList.remove('nav-bar-hor--hidden');
            }
        }
    })
}, navOptions);

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);


navChange.observe(home);

aboutItems.forEach(item => {
    appearOnScroll.observe(item);
});

// function navSplit(target) {
//     let width = target.offsetWidth * 1.15;
//     let position = `${target.dataset.position * width}px`;
    // target.setAttribute('style', `transform: translateX(${position})`);
// };
// function navReturn(target) {
    // target.setAttribute('style', 'transform: initial');
// }