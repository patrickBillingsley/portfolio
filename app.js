const tabs = Array.from(document.querySelectorAll('[data-tab]'));

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        tabNum = event.target.dataset.tab;

        tabs.forEach(tab => {
            if(tabs.indexOf(tab) < tabNum) {
                if(tab.offsetParent.classList.contains('--hidden')) {
                    tab.offsetParent.classList.remove('--hidden');
                }
            }
            if(tabs.indexOf(tab) >= tabNum) {
                if(!tab.offsetParent.classList.contains('--hidden')) {
                    tab.offsetParent.classList.add('--hidden');
                }
            }
        })
    })
})