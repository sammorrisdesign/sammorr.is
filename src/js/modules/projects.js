let height, scrollTop, projects;

export default {
    init: function () {
        this.limitFiltersOnSafari();
        this.updateFixedValues();
        this.updateDynamicValues();
        this.checkForActiveProject();
        this.bindings();
    },

    bindings: function() {
        $(window).scroll(function(e) {
            this.updateDynamicValues();
            this.checkForActiveProject();
            this.resetPlayedVideos();
        }.bind(this));

        $(window).resize(function() {
            this.updateFixedValues();
            this.updateDynamicValues();
            this.checkForActiveProject();
        }.bind(this));
    },

    limitFiltersOnSafari: function() {
        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) || navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)

        if (isSafari) {
            $('body').addClass('is-safari');
        }
    },

    updateDynamicValues: function() {
        scrollTop = $(window).scrollTop();
    },

    updateFixedValues: function() {
        height = $(window).height();

        projects = [];

        $('.project').each(function() {
            projects.push($(this).offset().top)
        });
    },

    checkForActiveProject: function() {
        let activeProject;

        projects.forEach(function(top, i) {
            if (scrollTop + (height / 2) > top) {
                activeProject = i;
            }
        });

        if (typeof activeProject === 'number') {
            activeProject = $('.project').get(activeProject);

            if (!$(activeProject).hasClass('project--active')) {
                this.resetActiveProject();

                $(activeProject).addClass('project--active project--played');
                $('.project--active .project__video').get(0).play();
                $('.project--active .project__video').get(1).play();
            }
        } else {
            this.resetActiveProject();
        }
    },

    resetActiveProject: function() {
        if ($('.project--active').length) {
            $('.project--active .project__video').get(0).pause();
            $('.project--active .project__video').get(1).pause();
            $('.project--active').removeClass('project--active');
        }
    },

    resetPlayedVideos: function() {
        $('.project--played').each(function(i , el) {
            const videoTop = $(el).find('.project__content').offset().top;
            const videoBottom = videoTop + $(el).find('.project__content').height();

            if (videoTop > scrollTop + height || videoBottom < scrollTop) {
                $(el).removeClass('project--played');
                $(el).find('.project__video').get(0).currentTime = 0;
                $(el).find('.project__video').get(1).currentTime = 0;
            }
        }.bind(this));
    }
}
