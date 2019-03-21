$(document).ready(function(){
        //Backstretch.js
        $.backstretch('assets/images/bg.jpg');
        
        //Scroll event listener
        $(document).scroll(function () {
            //storing variable nav links
            let $nav = $('.nav a');
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          });
        
        //if the scroll position-x is higher than 1rem or the width is smaller than 567px
        // then make the logo smaller


        //scrollMagic.js
            //$(window).on("resize", function(e) {
                if ($(window).width() >= 768) {
                        let controller = new ScrollMagic.Controller();
                
                        let logo = new ScrollMagic.Scene({
                            triggerElement: '#introduction',
                            triggerHook: 1,
                            reverse: false,
                        })
                            .setClassToggle('#introduction','fade-in')
                            .addTo(controller);
                        let aboutMe = new ScrollMagic.Scene({
                            triggerElement: '.aboutMe',
                            triggerHook: 1,
                            reverse: true,
                        })
                            .setClassToggle('#aboutMe','fade-in')
                            .addTo(controller);
                        let menu = new ScrollMagic.Scene({
                            triggerElement: '#menuContent',
                            triggerHook: 1,
                            reverse: false,
                        })
                            .setClassToggle('#menu','fade-in')
                            .addTo(controller);
                } else if ($(window).width() < 768) {
                        $('#introduction').css('opacity','1');
                        $('#aboutMe').css('opacity', '1');
                        $('#menu').css('opacity', '1');
                    }
});
