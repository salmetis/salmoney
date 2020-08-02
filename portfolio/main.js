$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');        
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');        
    });

    /*$('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        },2000);
      });*/
    
    $('#up').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
      });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
    const chk = document.getElementById('chk');
    chk.addEventListener('change', () => { 
        document.body.classList.toggle('dark');
    });  
    $(function () {
        $("#chk").click(function () {
            if ($(this).is(":checked")) {
                $("section").show();
                $("h6").hide();
            } else {
                $("section").hide();
                $("h6").show();
            }
        });
    });  
});