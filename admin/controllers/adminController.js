
const adminAccess = new ProductsController();

let productListRow = document.getElementById('product-list-row');
let addProductOuterBtn = document.getElementById('submit-button-outer');
let addProductInnerBtn = document.getElementById('submit-button-inner');

adminAccess.loadLocalStorage();


const displayListFromLocal = () => {

    let products = adminAccess.productsList;

    for (let i = 0; i < products.length; i++) {

        let insertRow = document.createElement('tr');
        insertRow.setAttribute('data-id', 'products[i].id');
        insertRow.innerHTML = `
        <td>${products[i].brand}</td>
        <td>${products[i].sneaker}</td>
        <td>${products[i].price}</td>
        <td>
            <img class='image-thumbnail-url' src='${products[i].image}' height='300'; >
        </td>
        <td>
            <img class='image-thumbnail-upload' src='${products[i].imageUpload}' height='300'; >
        </td>
        `;
        productListRow.append(insertRow);
    }
    // displayListFromLocal();
}

// BUTTON CONTAINER SUBMIT
inputSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    adminAccess.addProducts(brandInput.value, sneakerInput.value, priceInput.value, imageInput.value, imageInputUpload.value);
    productListRow.innerHTML = '';
    
    brandInput.value = '';
    sneakerInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    imageInputUpload.value = '';

    displayListFromLocal();
});
// BUTTON LETTER CONTAINER SUBMIT
// inputSubmitLetter.addEventListener('click', (event) => {
//     event.preventDefault();
//     adminAccess.addProducts(brandInput.value, sneakerInput.value, priceInput.value, imageInput.value, imageInputUpload.value);
//     productListRow.innerHTML = '';
//     displayListFromLocal();

//     brandInput.value = '';
//     sneakerInput.value = '';
//     priceInput.value = '';
//     imageInput.value = '';
//     imageInputUpload.value = '';
// });
