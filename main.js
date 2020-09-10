const navItems = document.querySelectorAll('.anim');

const options = {
    root: document.querySelector('body'),
    rootMargin: '-25% 0px 0px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.style.animation = `100ms ${entry.target.innerText}Move forwards`;
        console.log(entry.target.style.animation);
    })
}, options);

navItems.forEach(navItem => {
    observer.observe(navItem);
})