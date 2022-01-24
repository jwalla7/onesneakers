
// LEFT NAVIGATION FILTER CONTAINERS & BUTTONS
const viewAllBtnO = document.getElementById('view-all-text-outer');
const viewAllBtnI = document.getElementById('view-all-text-inner');
const brandBtnO = document.getElementById('brand-text-outer');
const brandBtnI = document.getElementById('brand-text-inner');
const topFilterLftContainer = document.querySelector('.top-filter-search-left-container');
const topFilterTextContainer = document.querySelector('.top-filter-text-container-active'); 
const sneakersBtn = document.getElementById('sneakers-text');

// VIEW ALL BTN reloads to all sneakers
viewAllBtnI.addEventListener('mousedown', (event) => {
    event.preventDefault;
    loadSneakers();
    viewAllBtnO.style.borderColor = 'white';
    topFilterLftContainer.style.visibility = 'hidden';
    sneakersBtn.style.visibility = 'visible';
    
    viewAllBtnI.addEventListener('mouseup', () => {
        viewAllBtnO.style.borderColor = '';
        topFilterLftContainer.style.animationPlayState = 'running';
        topFilterLftContainer.style.animation = 'slide-in-left .6s ease-in';
        topFilterLftContainer.style.visibility = 'visible';
    })
});

brandBtnI.addEventListener('mousedown', (event) => {
    event.preventDefault;
    brandBtnO.style.borderColor = 'white';
    topFilterLftContainer.style.visibility = 'hidden';
    
    brandBtnI.addEventListener('mouseup', () => {
        brandBtnO.style.borderColor = '';
        sneakersBtn.style.visibility = 'hidden';
        topFilterLftContainer.style.visibility = 'visible';
        topFilterLftContainer.style.animationPlayState = 'running';
        topFilterLftContainer.style.animation = 'slide-in-left .6s ease-in';
    })
});

topFilterLftContainer.addEventListener('mouseleave', () => {
    topFilterLftContainer.style.visibility = 'hidden';
    sneakersBtn.style.visibility = '';
});


// ON CLICK LOAD ADIDAS SNEAKERS
const adidasFilterBtn = document.getElementById('search-by-adidas-btn-container');
const adidasFilterBtnText = document.getElementById('search-by-adidas-btn-text');
    // Button Container
adidasFilterBtn.addEventListener('mousedown', (event) => {
    event.preventDefault;
    event.target.style.backgroundColor = 'white';
    adidasFilterBtnText.style.color = 'black';
    loadSneakers(0);
    
    adidasFilterBtn.addEventListener('mouseup', (event) => {
        event.target.style.backgroundColor = '';
        adidasFilterBtnText.style.color = '';
        // location.search;
        loadSneakersBYBrandAdidas();
    })
});


// HOVER LISTINGS IMAGE TO DISPLAY IN TOP DISPLAY CONTAINER
// const topDisplay = document.querySelector('.selected-sneaker-display-container');
// const sneakerListingImageDefault = document.getElementById('selected-sneaker-image');
// const sneakerListingImage = document.querySelector('.sneaker-listing-display-image');
// const sneakerListingImageId = document.getElementById('sneaker-listing-image');


// sneakerListingImageId.addEventListener('mouseenter', (event) => {
//     sneakerListingImageDefault.style.visibility = 'hidden';
//     let val = sneakerListingImageId.src;
//     src = '' + val + '',
//     img = document.createElement('img'),
//     img.setAttribute('class', 'selected-sneaker-display-image'),
//     img.src = src;
//     topDisplay.appendChild(img);
    
//         sneakerListingImageId.addEventListener('mouseleave', () => {
//             sneakerListingImageDefault.style.visibility = '';
//             topDisplay.removeChild(img);
//         })
// });
