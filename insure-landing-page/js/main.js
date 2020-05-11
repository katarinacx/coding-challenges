window.openNav = function() {
    $('.menu-items').slideToggle(200, updateHamburger);
};

function updateHamburger() {
    if ($('.menu-items').css('display') != 'none') {
        $('#hamburger').attr('src', '../images/icon-close.svg');
        $('.menu-items').css('background-image', 'url(../images/bg-pattern-mobile-nav.svg)');
        $('body').css('overflow-y', 'hidden');
    } else {
        $('#hamburger').attr('src', '../images/icon-hamburger.svg');
        $('.menu-items').css('background-image', 'none');
        $('body').css('overflow-y', 'scroll');
    }
}