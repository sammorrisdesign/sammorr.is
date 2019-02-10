import offset from 'document-offset';

let height, scrollTop, projects;

export default {
    init: function() {
        this.limitFiltersOnSafari();
        this.updateFixedValues();
        this.updateDynamicValues();
        this.checkForActiveProject();
        this.bindings();
    },

    bindings: function() {
        window.addEventListener('scroll', function() {
            this.updateDynamicValues();
            this.checkForActiveProject();
            this.resetPlayedVideos();
        }.bind(this),
        {
            passive: true
        });

        window.addEventListener('resize', function() {
            this.updateFixedValues();
            this.updateDynamicValues();
            this.checkForActiveProject();
        }.bind(this));
    },

    limitFiltersOnSafari: function() {
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) || navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)

        if (isSafari) {
            document.body.classList.add("is-safari");
        }
    },

    updateDynamicValues: function() {
        scrollTop = window.pageYOffset;
    },

    updateFixedValues: function() {
        height = window.innerHeight;

        projects = [];

        document.querySelectorAll('.project').forEach((project) => {
            projects.push(Math.floor(offset(project).top));
        });
    },

    checkForActiveProject: function() {
        let activeProject;

        projects.forEach((top, i) => {
            if (scrollTop + (height / 2) > top) {
                activeProject = i;
            }
        });

        if (typeof activeProject === 'number') {
            activeProject = document.querySelectorAll('.project')[activeProject];

            if (!activeProject.classList.contains('project--active')) {
                this.resetActiveProject();

                activeProject.classList.add('project--active', 'project--played');
                activeProject.querySelectorAll('.project__video').forEach((video) => {
                    video.play();
                });
            }
        } else {
            this.resetActiveProject();
        }
    },

    resetActiveProject: function() {
        if (document.querySelector('.project--active')) {
            document.querySelectorAll('.project--active .project__video').forEach((video) => {
                video.pause();
                video.currentTime = document.querySelector('.project--active .project__video').currentTime;
            });
            document.querySelector('.project--active').classList.remove('project--active');
        }
    },

    resetPlayedVideos: function() {
        document.querySelectorAll('.project--played').forEach((project) => {
            const projectTop = offset(project.querySelector('.project__content')).top;
            const projectBottom = projectTop + project.clientHeight;

            if (projectTop > scrollTop + height || projectBottom < scrollTop) {
                project.classList.remove('project--played');
                project.querySelectorAll('.project__video').forEach((video) => {
                    video.currentTime = 0;
                })
            }
        });
    }
}
