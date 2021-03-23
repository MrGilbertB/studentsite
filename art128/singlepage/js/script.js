document.addEventListener('DOMContentLoaded', function() {

    //JAVASCRIPT FUNCTIONS GO HERE
    // console.log("js is ready");

    // toggle-nav mobile menu for small screen

    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') { //if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else { //if false do this
            menunav.setAttribute('data-navstate', 'open');
        }
    });
    // sticky nav scrollfor small screen

    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var stickyheader = document.querySelector(".sticky");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {
            stickyheader.setAttribute('data-navstate', 'closed');
        };
    };

});
