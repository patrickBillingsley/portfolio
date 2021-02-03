const tabs = document.querySelectorAll('.section-title__container');

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        console.log(event.target.offsetParent);
        const classList = event.target.offsetParent.classList;

        if(classList.contains('--hidden')) {
            classList.remove('--hidden');
        } else {
            classList.add('--hidden');
        }
    })
})