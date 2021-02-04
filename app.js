const tabs = Array.from(document.querySelectorAll('[data-tab]'));

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        const tabNum = event.target.dataset.tab;

        tabs.forEach(tab => {
            const classes = tab.offsetParent.classList;

            if(tabNum == 1) {
                if(tabs[0].classList.contains('--hidden')) {
                    tabs[0].classList.remove('--hidden');
                }
            } else {
                if(!tabs[0].classList.contains('--hidden')) {
                    tabs[0].classList.add('--hidden');
                }
            }
            if(tabs.indexOf(tab) < tabNum) {
                if(classes.contains('--hidden')) {
                    classes.remove('--hidden');
                }
            }
            if(tabs.indexOf(tab) >= tabNum) {
                // if(!tabs[0].classList.contains('--hidden')) {
                //     tabs[0].classList.add('--hidden');
                // }
                if(!classes.contains('--hidden')) {
                    classes.add('--hidden');
                }
            }
        })
    })
})