$(document).ready(function(){
        //Backstretch.js
        $.backstretch('assets/images/bg.jpg');
        
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
                    }else if ($(window).width() < 768) {
                        $('#introduction').css('opacity','1');
                        $('#aboutMe').css('opacity', '1');
                        $('#menu').css('opacity', '1');
                    }
});
