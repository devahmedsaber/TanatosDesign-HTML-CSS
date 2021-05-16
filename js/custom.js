$(function (){
    'use strict';
    // Trigger Nice Scroll Plugin
    $("html").niceScroll({
        cursorcolor : "#f7600e",
        cursorwidth : 10,
        cursorborderradius : 0,
        cursorborder : "1px solid #f7600e"
    });
    // Change Header Height
    $(".header").height($(window).height());
    // Scroll To Features
    $(".header .arrow i").click(function(){
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });

    $(".hire").click(function(){
        $("html, body").animate({
            scrollTop: $(".our-team").offset().top
        }, 1000);
    });
    // Show Hidden Items From Work Button
    $(".show-more").click(function(){
        $(".our-work .hidden").fadeIn(1000);
    });
    // Check Testimonials
    var leftArrow = $(".fa-chevron-left"),
        rightArrow = $(".fa-chevron-right");
    function checkClients(){
        $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClients();

    $(".testim i").click(function(){
        if($(this).hasClass("fa-chevron-right")){
            $(".testim .active").fadeOut(100, function(){
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClients();
            });
        }else{
            $(".testim .active").fadeOut(100, function(){
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients();
            }); 
        }
    });

});