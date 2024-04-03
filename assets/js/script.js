AOS.init();

$(document).ready(function() {
    $('.second-slide-con h2').removeClass('aos-animate');
});

$(document).ready(function() {
    $('.second-slide-con p').removeClass('aos-animate');
});
$(document).ready(function() {
    $('.second-slide-con h4').removeClass('aos-animate');
});
$(document).ready(function() {
    $('.second-slide-con-rpart').removeClass('aos-animate');
});

$(document).ready(function() {
    $('.the-gallery').removeClass('aos-animate');
});

$(document).ready(function() {
    $('.third-slide-con h2').removeClass('aos-animate');
});

// Initialize Swiper
$(document).ready(function() {
    var swiperMain = new Swiper(".mySwiper", {
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
          nextEl: '.s-next',
          prevEl: '.s-prev',
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
                transitionDuration: "10s",
                transitionTimingFunction: "ease",
            },
            next: {
                translate: ["100%", 0, 0],
                transitionDuration: "10s",
                transitionTimingFunction: "ease",
            },
        },
        speed: 1200,
        on: {
            slideChangeTransitionStart: function() {
                // Remove animations from all slides
                
                $('.third-slide-con h2').removeClass('aos-animate');
                $('.third-slide-con p').removeClass('aos-animate');
                $('.third-slide-con span').removeClass('aos-animate');
                $('.third-slide-con .fade-div').removeClass('aos-animate');
                $('.third-slide-con .pop-btn.dark').removeClass('aos-animate');
                $('.socail-bar').removeClass('aos-animate');
                $('.third-main-con-op').css("opacity" , 0);
                // $('.tg-1').removeClass('aos-animate');
                // $('.tg-2').removeClass('aos-animate');
            },

            slideChangeTransitionEnd: function() {
                const activeSlide = this.slides[this.activeIndex];

                // Add animations to the active slide
                $(activeSlide).find('.second-slide-con h2').addClass('aos-animate');
                $(activeSlide).find('.second-slide-con p').addClass('aos-animate');
                $(activeSlide).find('.second-slide-con h4').addClass('aos-animate');
                $(activeSlide).find('.second-slide-con-rpart').addClass('aos-animate');
                $(activeSlide).find('.the-gallery').addClass('aos-animate');
                $(activeSlide).find('.third-slide-con h2').addClass('aos-animate');
                $(activeSlide).find('.third-slide-con p').addClass('aos-animate');
                $(activeSlide).find('.third-slide-con span').addClass('aos-animate');
                $(activeSlide).find('.third-slide-con .fade-div').addClass('aos-animate');
                $(activeSlide).find('.third-slide-con .pop-btn.dark').addClass('aos-animate');
                $(activeSlide).find('.third-main-con-op').css("opacity" , 1);
                // $(activeSlide).find('.tg-1').addClass('aos-animate');
                // $(activeSlide).find('.tg-2').addClass('aos-animate');

         
                // Refresh AOS animations on the new active slide
                AOS.refresh();
            },
        },
    });
    $('.next-slide').click(function(){
      swiperMain.slideTo(1);
      $('#exampleModal') .modal('hide');
    })
    // swiperMain.slideTo(2);
});

$(document).ready(function() {
  // Add click event to menubar
  $(".the-header").click(function(e) {
    e.stopPropagation(); // Prevent the click event from bubbling up
    $(".side-menu").addClass("active");
    $(".bg-over").addClass("active-over");
  });
   $(".menubar").click(function(e) {
    e.stopPropagation(); // Prevent the click event from bubbling up
    $(".side-menu").addClass("active");
    $(".bg-over").addClass("active-over");
  });

  // Add click event to document body
  $(document).click(function(e) {
    // Check if the clicked element is not inside the side-menu
    if (!$(e.target).closest('.side-menu').length) {
      // Remove classes from side-menu and bg-over
      $(".side-menu").removeClass("active");
      $(".bg-over").removeClass("active-over");
    }
  });
   $(".close").click(function(e) {
    e.stopPropagation(); // Prevent the click event from bubbling up
    $(".side-menu").removeClass("active");
    $(".bg-over").removeClass("active-over");
  });
  // Prevent clicks inside side-menu from closing it immediately
  $(".side-menu").click(function(e) {
    e.stopPropagation(); // Prevent the click event from bubbling up
  });
});

  // Set the date we're counting down to
    var countDownDate = new Date("Apr 19, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        // document.getElementById("days").innerHTML = days;
        // document.getElementById("hours").innerHTML = hours;
        // document.getElementById("minutes").innerHTML = minutes;
        // document.getElementById("seconds").innerHTML = seconds;

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


var title = $('.TD-title__perfomance'),
    string = title.text(),
    separated = [],
    delay = [],
    delayStep = 0;

for (var i = 0; i < string.length; i++) {
  separated.push(string[i]);
  delay.push( delayStep += (.4 / string.length).toFixed(2) * 1 );
};

for (var i = 0; i < separated.length; i++) {
  title.append('<span style="animation-delay: '+ ( .55 + delay[i] - .1 ).toFixed(2) +'s">' + separated[i] + '</span>');
};

// system
$('.resstartIt').click(function(){
  title.removeAttr('td-animate');
  setTimeout(function(){
    title.attr('td-animate', '');
  }, 300);
});