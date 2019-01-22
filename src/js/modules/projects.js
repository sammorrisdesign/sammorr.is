export default {
    init: function () {
        this.bindings();
    },

    bindings: function() {
        $('.project__content').hover(function(e) {
            this.showProject(e.currentTarget);
        }.bind(this));

        $('.project').mouseleave(function(e) {
            this.hideProject(e.currentTarget);
        }.bind(this));
    },

    showProject: function(el) {
        $(el).parent().addClass('project--active');
        $(el).find('.project__video').get(0).play();
    },

    hideProject: function(el) {
        $(el).removeClass('project--active');
        $(el).find('.project__video').get(0).pause();
    }
}
