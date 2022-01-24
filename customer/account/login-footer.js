// HEADER CLICK, FOOTER EXTEND
const footerHeader = document.querySelector('.footer-header-container');
const footerBody = document.getElementById('footer-body-container');

footerHeader.addEventListener('click', (event) => {
    footerBody.style.display = 'block';
    event.target.style.backgroundColor = 'blue';
    // footerBody.style.visibility = 'visible';
})
