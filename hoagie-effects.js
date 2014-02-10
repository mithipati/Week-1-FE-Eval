$(document).ready(function() {
    $(".hoagies").addClass("blue");
    $(".first").fadeIn('fast');


    // UNCOMMENT IN CASE WANT 'MENU' BUTTON TO RESET MENU PAGE
    $("#menu").click(function(){
        // $(".hoagies").addClass("blue");
        // $(".sandwiches").removeClass("blue");
        // $(".sides").removeClass("blue");
        // $(".salads").removeClass("blue");
        // $(".other").removeClass("blue");
        // $(".first").fadeIn('slow');
        // $(".second").fadeOut('slow');
        // $(".third").fadeOut('slow');
        // $(".fourth").fadeOut('slow');
        // $(".fifth").fadeOut('slow');
    });


    $(".hoagies").click(function(){
        $(".hoagies").addClass("blue");
        $(".sandwiches").removeClass("blue");
        $(".sides").removeClass("blue");
        $(".salads").removeClass("blue");
        $(".other").removeClass("blue");
        $(".first").fadeIn('slow');
        $(".second").fadeOut('slow');
        $(".third").fadeOut('slow');
        $(".fourth").fadeOut('slow');
        $(".fifth").fadeOut('slow');
    });
    $(".sandwiches").click(function(){
        $(".sandwiches").addClass("blue");
        $(".hoagies").removeClass("blue");
        $(".sides").removeClass("blue");
        $(".salads").removeClass("blue");
        $(".other").removeClass("blue");
        $(".first").fadeOut('slow');
        $(".second").fadeIn('slow');
        $(".third").fadeOut('slow');
        $(".fourth").fadeOut('slow');
        $(".fifth").fadeOut('slow');
    });
    $(".sides").click(function(){
        $(".sides").addClass("blue");
        $(".hoagies").removeClass("blue");
        $(".sandwiches").removeClass("blue");
        $(".salads").removeClass("blue");
        $(".other").removeClass("blue");
        $(".first").fadeOut('slow');
        $(".second").fadeOut('slow');
        $(".third").fadeIn('slow');
        $(".fourth").fadeOut('slow');
        $(".fifth").fadeOut('slow');
    });
    $(".salads").click(function(){
        $(".salads").addClass("blue");
        $(".hoagies").removeClass("blue");
        $(".sandwiches").removeClass("blue");
        $(".sides").removeClass("blue");
        $(".other").removeClass("blue");
        $(".first").fadeOut('slow');
        $(".second").fadeOut('slow');
        $(".third").fadeOut('slow');
        $(".fourth").fadeIn('slow');
        $(".fifth").fadeOut('slow');
    });
    $(".other").click(function(){
        $(".other").addClass("blue");
        $(".hoagies").removeClass("blue");
        $(".sandwiches").removeClass("blue");
        $(".sides").removeClass("blue");
        $(".salads").removeClass("blue");
        $(".first").fadeOut('slow');
        $(".second").fadeOut('slow');
        $(".third").fadeOut('slow');
        $(".fourth").fadeOut('slow');
        $(".fifth").fadeIn('slow');
    });
    $(".button").hover(function(){
        $(this).toggleClass("fade");
    });
    $('.icon').mouseenter(function(){
        $(this).removeClass("grayscale");
    });
    $('.icon').mouseleave(function(){
        $(this).addClass("grayscale");
    });
    $(document).foundation({
          orbit: {
              animation: 'slide',
              timer_speed: 10000,
              pause_on_hover: true,
              resume_on_mouseout: false,
              animation_speed: 500,
              slide_number: false,
              circular: true,
              timer: true,
              container_class: 'orbit-content'
          }
    });
});
