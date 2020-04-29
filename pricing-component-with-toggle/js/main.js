$(document).ready(init);

function init() {
    $('.monthly').hide();
}

window.togglePriceType = function() {
    $('.monthly').toggle();
    $('.yearly').toggle();
}