window.openNav = function() {
    $('.menu-items').toggle();

    if ($('.menu-items').css('display') != 'none') {
        $('#hamburger').attr('src', '../images/icon-close.svg');
    } else {
        $('#hamburger').attr('src', '../images/icon-hamburger.svg');
    }
};