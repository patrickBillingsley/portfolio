function followScroll() {
    window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    entry.style.transform = `translateX(${0.45 * val}%)`;
    });
};

const navItems = document.querySelectorAll('.anim');

const options = {
    root: document.querySelector('body'),
    rootMargin: '-25% 0px 0px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry);
    })
}, options);

navItems.forEach(navItem => {
    observer.observe(navItem);
});