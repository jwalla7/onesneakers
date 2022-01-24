
// SAVE SCROLL POSITION ON RELOAD
document.addEventListener('DOMContentLoaded', (event) => {
    let saveScrollPosition = localStorage.getItem('saveScrollPosition');
    if (saveScrollPosition) window.scrollTo(0, saveScrollPosition);
});

window.onscroll = () => {
    localStorage.setItem('saveScrollPosition', window.scrollY);
};