let height, scrollTop, projects;

export default {
    init: function () {
        this.updateFixedValues();
        this.bindings();
        this.checkForActiveProject();
    },

    bindings: function() {
        $(window).scroll(function(e) {
            this.updateDynamicValues();
            this.checkForActiveProject();
        }.bind(this));
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
                if ($('.project--active').length) {
                    $('.project--active').find('.project__video').get(0).pause();
                    $('.project--active').find('.project__video').get(0).currentTime = 0;
                    $('.project--active').removeClass('project--active');
                }

                $(activeProject).addClass('project--active');
                // console.log($(activeProject).find('.project__video').get(0));
                $(activeProject).find('.project__video').get(0).play();
                $('body').removeClass().addClass('is-' + $(activeProject).data('color'));
            }
        }
    }
}
