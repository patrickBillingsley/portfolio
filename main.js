window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

console.log(document.body.style);

const navItems = document.querySelectorAll('.anim');
const aboutItems = document.querySelectorAll('.about__card');

const scrollOptions = {
    root: document.querySelector('body'),
    rootMargin: '-25% 0px 0px 0px',
    threshold: 1
};
const appearOptions =  {
    threshold: 0.25
};

// const scrollFollow = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const className = `nav-bar__${entry.target.innerText}--hor`;
//         const classList = entry.target.classList;
//         if(!entry.isIntersecting) {
//             if(classList.contains(className)){
//                 classList.remove(className);
//                 navReturn(entry.target);
//             }
//             return;
//         } 
//         if(!classList.contains(className)){
//             classList.add(className);
//             navSplit(entry.target);
//         }
//     });
// }, scrollOptions);

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);


// navItems.forEach(item => {
//     scrollFollow.observe(item);
// });
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