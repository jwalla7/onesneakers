// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
    document.querySelector('.login-customer-form').reset();
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
};
