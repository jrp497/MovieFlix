/**
 * Created by Jay Patel on 5/19/2016.
 */
/** HEADER JS FUNCTIONALITY */
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
    }
});


/** SLIDER JS FUNCTIONALITY */
$(document).ready(function(){


            $('.slider1').bxSlider({
                slideWidth: 1000,
                minSlides: 5,
                maxSlides: 7,
                slideMargin: 10
            });

});
