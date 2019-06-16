
    $(function () {
        'use strict';

        // call the function below to adjust the screen height when the first loading
        carouselHeight();

        //Adjust Slider Height when the screen is resizd

        $(window).resize(function () {
            carouselHeight();
        });

        // A function to adjust the slider height
        function carouselHeight() {
            var winH = $(window).height(),
                upperH = $('.upper-bar').innerHeight(),
                navH = $('.navbar').innerHeight();
            $('.slider, .carousel-item').height(winH - (upperH + navH));
        }
        // add active class to the button where the user click and remove the active class from 
        $('.featured-work ul li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            console.log($(this).data('class'));
            if ($(this).data('class') === 'all') {
                $('.featured-work .shuffle-imgs .col-md').css('opacity', '1');
            } else {
                $('.featured-work .shuffle-imgs .col-md').css('opacity', '0.2');
                $($(this).data('class')).parent().css('opacity', 1); // this code affects the element whose 'class' so it's the image I can put the class to the parent of it or handle it with js by putting .parent after selecting it with the $ selector.
                // this code made a change to the class in the images and change the opacity inside it.
                // I should put the data=".calss-name" in the buttons because I don't wanna made a concatinate to them while selecitng in jquery
                // I hope you will understand this from the first time good luck future Nasser.
            }
        });

        // Our auto active control Code 
        (function autoActiveControl() {
            $('#second-carousel .active').each(function () {
                if ($(this).is('.carousel-item:first-of-type')) {
                    $('.testimonials .carousel-control-next').addClass('active');
                    $('.testimonials .caruosel-control-prev').removeClass('active');
                    autoActiveControl();
                } else if ($(this).is('.carousel-item:last-of-type')) {
                    $('.testimonials .carousel-control-prev').addClass('active');
                    $('.testimonials .caruosel-control-next').removeClass('active');
                    autoActiveControl();
                } else {
                      $('.testimonials .caruosel-control-prev').removeClass('active');
                    $('.testimonials .caruosel-control-next').removeClass('active');
                    $('.testimonials .carousel-control-prev').addClass('active');
                    $('.testimonials .carousel-control-next').addClass('active');

                    autoActiveControl();
                }
            });
        }());
        //End of self-invoke function;
    });      