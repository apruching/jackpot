$(function() {
    'use strict';



    var backToTop = $(".back-to-top");
    var Nav = $("nav");
    var htmlBody = $("html, body");

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }


        if (scrolling > 50) {
            Nav.addClass("nav-fix");
        } else {
            Nav.removeClass("nav-fix");
        }
    });

    backToTop.click(function() {
        htmlBody.animate({
            scrollTop: 0,
        }, 2000);
    });

    // accoudian js
    $('.accordion-item').on('click', function() {
        $('.add-border').removeClass('add-border');
        $(this).toggleClass('add-border');
    });


    // nice scroll;
    $(".get-nicer").niceScroll("div.nice-wrapper", {
        cursorcolor: "#944bff",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000000",
        iframeautoresize: true,
        smoothscroll: true,
    });
});


// count-down;
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');

const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


// current year;
const currentYear = new Date().getFullYear();
const countdownYear = new Date(`jan 1 ${currentYear + 1} 00:00:00`);

// create a function;
function countYear() {
    const currentTime = new Date();
    const diff = countdownYear - currentTime;


    // milisecond . second . minute , hour and day conver;
    const s = Math.floor((diff / 1000) % 60);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const d = Math.floor((diff / 1000 / 60 / 60 / 24));

    second.innerHTML = (s < 10) ? '0' + s : s;
    minute.innerHTML = (m < 10) ? '0' + m : m;
    hour.innerHTML = (h < 10) ? '0' + h : h;
    day.innerHTML = (d < 10) ? '0' + d : d;
}

setInterval(countYear, 1000);
// year.innerHTML = countdownYear.getFullYear();
countYear();