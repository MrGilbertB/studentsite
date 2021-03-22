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

});
