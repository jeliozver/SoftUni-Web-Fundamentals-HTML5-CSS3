$(() => {
    const MAIN_NAV = $('.main-nav');

    $('.main-nav-trigger').on('click', () => {
        if (MAIN_NAV.css('display') === 'none') {
            MAIN_NAV.show();
        } else {
            MAIN_NAV.hide();
        }
    });

    MAIN_NAV.hover(handlerIn, handlerOut);

    function handlerIn() {
        MAIN_NAV.show();
    }

    function handlerOut() {
        MAIN_NAV.hide();
    }
});