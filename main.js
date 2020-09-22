window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const navItems = document.querySelectorAll('.anim');
const home = document.querySelectorAll('.nav__home__button')
const projects = document.querySelectorAll('.nav__projects__button')
const about = document.querySelectorAll('.nav__about__button')
const contact = document.querySelectorAll('.nav__contact__button')
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
const homeOptions = {
    root: document.querySelector('body'),
    rootMargin: '0px 0px -80% 0px'
};
const projectsOptions = {
    root: document.querySelector('body'),
    rootMargin: '-20% 0px -60% 0px'
};
const aboutOptions = {
    root: document.querySelector('body'),
    rootMargin: '-40% 0px -30% 0px'
};
const contactOptions = {
    root: document.querySelector('body'),
    rootMargin: '-70% 0px 0px 0px'
};
const appearOptions =  {
    threshold: 0.25
};

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
const navHomeSelect = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('selected');
        } else {
            entry.target.classList.remove('selected');
        }
    })
}, homeOptions);
const navProjectsSelect = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('selected');
        } else {
            entry.target.classList.remove('selected');
        }
    })
}, projectsOptions);
const navAboutSelect = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('selected');
        } else {
            entry.target.classList.remove('selected');
        }
    })
}, aboutOptions);
const navContactSelect = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('selected');
        } else {
            entry.target.classList.remove('selected');
        }
    })
}, contactOptions);
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);


navItems.forEach(navItem => {
    scrollFollowDown.observe(navItem);
    scrollFollowUp.observe(navItem);
});
home.forEach(homeItem => {
    navHomeSelect.observe(homeItem);
});
projects.forEach(projectsItem => {
    navProjectsSelect.observe(projectsItem);
});
about.forEach(aboutItem => {
    navAboutSelect.observe(aboutItem);
});
contact.forEach(contactItem => {
    navContactSelect.observe(contactItem);
});
aboutItems.forEach(aboutItem => {
    appearOnScroll.observe(aboutItem);
});