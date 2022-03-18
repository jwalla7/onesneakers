const loadAdidasFallCollection = async (stop) => {
    if (stop == 0) {
        return false;
    } else {
        // FETCH DATA
        const apiURL = `https://onesneakers.herokuapp.com/sneakers/brand?brand=adidas`;
        console.log(`FETCHING Adidas sneakers...`);
        const response = await fetch(apiURL);
        console.log(response);
        const data = await response.json();
        console.log(data);

        // MANIPULATE DATA
        for (let i = 0; i < data.length; i++) {
            let adidasObj = Object.values(data)[i];

            let sneakerId = JSON.stringify(adidasObj.sneakerId);
            let brandName1 = JSON.stringify(adidasObj.brandName);
            let sneakersName1 = JSON.stringify(adidasObj.sneakerName);
            let image1 = JSON.stringify(adidasObj.image);
            let price = adidasObj.price;
            let availableStock = adidasObj.availableStock;

            // remove both "" characters excluding sneakerId price & availableStock
            let brandName2 = brandName1.replace('"', '');
            let sneakersName2 = sneakersName1.replace('"', '');
            let image2 = image1.replace('"', '');
            let brandName = brandName2.replace('"', '');
            let sneakersName = sneakersName2.replace('"', '');
            let image = image2.replace('"', '');

            // ADD DATA TO HTML
            const adidasFallCollectionDisplay = document.getElementById('adidas-ad-fall-collection-container-add');

            let addSneakers = document.createElement('a');
            // addSneakers.className = 'adidasShow';
            addSneakers.setAttribute('href', 'https://www.google.com/');
            addSneakers.setAttribute('target', '_blank');
            addSneakers.innerHTML = `
            <img class='adidasShow' id='${sneakersName}' src='${image}'/>
            `;
            adidasFallCollectionDisplay.append(addSneakers);
        }
    }
}
loadAdidasFallCollection().catch(error => {
    console.error(error);
});