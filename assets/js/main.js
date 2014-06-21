    /* Video Fade out */
    $(".project__content").hover(function(){
        $(this).parent().addClass("project--active");
        $(this).find(".project__content__video").get(0).play();
    });

    $(".project").mouseleave(function(){
        $(this).removeClass("project--active");
        $(this).find("video").get(0).pause();
    });

$(document).ready(function(){

    /* Contact */
    contactShown = 0;

    $(".navigation__link--contact").click(function(event){
        $(".contact").toggleClass("contact--visible");
        $(".navigation__link--contact").toggleClass("navigation__link--active");
        $(".contact__options__link--input").select();
        contactShown = $(window).scrollTop(); // Captures point when user clicks into contact form
    });

    function contactHide() {
        if ($(".contact").hasClass("contact--visible")) {
            $(".contact").removeClass("contact--visible");
            $(".navigation__link--contact").removeClass("navigation__link--active");
        }
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() - 150 > contactShown || $(window).scrollTop() + 150 < contactShown) {
            contactHide();
        }
    });

    $(".contact__mask").click(function(event){
        contactHide();
    });

    /* Widow Killa */
    $("h1 a").each(function() {
        var wordArray = $(this).text().split(" ");
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
    });

    $("#content-words p").each(function() {
        var wordArray = $(this).html().split(" ");
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
    });

});

if ('ontouchstart' in document) {
    $('body').removeClass('no-touch');
}