    /* Video Fade out */
    $(".project-content").hover(function(){
        $(this).siblings().addClass("active");
        $(this).addClass("active");
        $(this).find("video").get(0).play();
    });

    $(".project").hover(function(){

    },
    function(){
        $(this).find(".project-description").removeClass("active");
        $(this).find(".project-content").removeClass("active");
        $(this).find("video").get(0).pause();
    });

$(document).ready(function(){

    /* Contact */
    contactShown = 0;

    $("#contact-link").click(function(event){
        $("#contact").toggleClass("contact-show");
        $("#contact-link").toggleClass("active");
        $(".contact-buttons input").select();
        $("#contact-blocker").toggle();
        contactShown = $(window).scrollTop();
    });

    function contactCheck() {
        if ( $("#contact").hasClass("contact-show") ) {
            $("#contact").removeClass("contact-show");
            $("#contact-link").removeClass("active");
            $("#contact-blocker").hide();
        }
    }

    $(window).scroll(function() {
        if ( $(window).scrollTop() - 150 > contactShown  ) {
            contactCheck();
        }

        if ( $(window).scrollTop() + 150 < contactShown ) {
            contactCheck();
        }
    });

    $("#contact-blocker").click(function(event){
        contactCheck();
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