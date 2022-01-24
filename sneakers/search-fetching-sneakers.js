const loadSneakers = async (stop) => {
    if (stop == 0) {
        console.log('STOPPING execution of loadSneakers()...');
        return false;
    } else {
// FETCH DATA
    const apiURL = `https://onesneakers.herokuapp.com/sneakers`;
    console.log('FETCHING all sneakers...');
    const response = await fetch(apiURL);
    console.log(response);
    const data = await response.json();
    console.log(data);
// MANIPULATE DATA
        for (let i = 0; i < data.length; i++) {
            let sneakersObj = Object.values(data)[i];

            let sneakerId = JSON.stringify(sneakersObj.sneakerId); 
            let brandName1 = JSON.stringify(sneakersObj.brandName);
            let price = sneakersObj.price;
            let sneakersName1 = JSON.stringify(sneakersObj.sneakerName);
            let image1 = JSON.stringify(sneakersObj.image);
            let availableStock = sneakersObj.availableStock;

            // console.log(sneakerId);
            // console.log(brandName1);
            // console.log(sneakersName1);
            // console.log(price);
            // console.log(image1);
            // console.log(availableStock);

            // remove both "" characters excluding sneakerId price & availableStock
            let brandName2 = brandName1.replace('"', '');
            let sneakersName2 = sneakersName1.replace('"', '');
            let image2 = image1.replace('"', '');
            let brandName = brandName2.replace('"', '');
            let sneakersName = sneakersName2.replace('"', '');
            let image = image2.replace('"', '');

//  ADD DATA TO HTML
            const sneakerSearchDisplay = document.getElementById('sneaker-search-display-container-add');

            let addSneakers = document.createElement('div');
            addSneakers.className = 'sneaker-list-display-container';
            addSneakers.setAttribute('id', 'sneaker-search-display-container-add');
            addSneakers.innerHTML = `
            <div class='sneaker-listing-brand-container'>
                <span class='sneaker-listing-text'>${brandName}</span>
            </div>
            <div class='sneaker-listing-price-container'>
                <span class='sneaker-listing-text'>${price}.99</span>
            </div>
            <div class='sneaker-listing-name-container'>
                <span class='sneaker-listing-text'>${sneakersName}</span>
            </div>
            <div class='item-top-stock'>
                <div class='sneaker-listing-buy-container'>
                    <a href='https://www.google.com/'><span class='sneaker-listing-text'>Want</span></a>
                    <div class='stock-btn-0' id='' style='text-decoration: none;'>sold</div>
                </div>
            </div>
            <img class='sneaker-listing-display-image' id='sneaker-listing-image' src=${image}>
            `;
            sneakerSearchDisplay.append(addSneakers);
        }
    }
};
loadSneakers().catch(error => {
    console.log("error!")
    console.error(error);
});




