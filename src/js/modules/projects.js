export default {
    init: function () {
        this.bindings();
    },

    bindings: function() {
        $('.project__content').hover(function() {
            $(this).parent().addClass('project--active');
            $(this).find('.project__video').get(0).play();
        }, function() {
            $(this).parent().removeClass('project--active');
            $(this).find('.project__video').get(0).pause();
        });
    }
}
