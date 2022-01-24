// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
};

// SCROLL TRANSLATE
window.onscroll = function() { 
    let wWidth = window.innerWidth; // width of the screen
    let wHeight = window.innerHeight; // height of the screen
    let sLength = document.querySelector('.brand-ElementWrapper').scrollWidth; // length of the scroll
    let topDistance = document.querySelector('.brand-Container').offsetTop; // distance from top of page to HorizontalWrapper
    let scrollDistance = topDistance + sLength - wWidth; // distance of horizontal scroll needed
    
    document.querySelector('.brand-Container').style.height = sLength + 'px';
    
    let scrollTop = window.scrollY; //scrollY (scroll distance from top);
    if (scrollTop >= topDistance && scrollTop <= scrollDistance ) {
        document.querySelector('.brand-ElementWrapper').style.transform =
        'translateX(-'+(scrollTop - topDistance) + 'px)';
    }
};

// QUERY RULER CONTAINER
window.onresize = screen;
window.onload = screen;

function screen() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;

    document.getElementById('queryRuler').innerHTML = `PAGE RULER = Width: ${myWidth}  |  Height: ${myHeight}px`;
};