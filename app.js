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
                if(!classes.contains('--hidden')) {
                    classes.add('--hidden');
                }
            }
        })
    })
})

const projects = Array.from(document.querySelectorAll('[data-project]'))

projects.forEach(project => {
    project.addEventListener('click', event => {
        const tagName = event.target.tagName;
        
        let projectNum;

        if(tagName == 'DIV') {
            projectNum = event.target.dataset.project;
        } else {
            projectNum = event.target.parentElement.dataset.project;
        }

        projects.forEach(project => {
            const classes = project.classList;
            const className = 'projects__section--hidden';

            if(projects.indexOf(project) == projectNum - 1) {
                if(classes.contains(className)) {
                    classes.remove(className);
                }
            }
            if(projects.indexOf(project) !== projectNum - 1) {
                if(!classes.contains(className)) {
                    classes.add(className);
                }
            }
        })
    })
})