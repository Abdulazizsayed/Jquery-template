$(function(){
    'use strict'; 

    // trigger nice scroll blugin
    $('html').niceScroll();

    // change header height
    $('.header').height($(window).height());

    // scroll to features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    // slide up over-image
    $.each($(".our-work .websites .website"),function(){
        $(this).hover(function(){
            $(this).children(".over-image").slideToggle();
        });
    });

    // slider
    const leftArrow = $('.testimonials i.fa-chevron-left');
    const rightArrow = $('.testimonials i.fa-chevron-right');

    function checkClients(){
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClients();

    $('.testimonials i').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testimonials .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testimonials .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});