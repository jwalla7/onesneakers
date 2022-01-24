class ProductsController {

    constructor(currentID = 0) {
        this.currentID = currentID;
        this.productsList = [];
    };

    addProducts(brand, sneaker, price, image, imageUpload) {
        let newProduct = {
            id: this.currentID++,
            brand,
            sneaker,
            price,
            image,
            imageUpload
        }

        this.productsList.push(newProduct);
        this.setLocalStorage();

    };


    setLocalStorage() {

        let inputProduct = JSON.stringify(this.productsList);
        localStorage.setItem('product', inputProduct);
        let newID = JSON.stringify(this.currentID);
        localStorage.setItem('currentID', newID);

    };


    loadLocalStorage() {

        if (localStorage.getItem('product')) {
            let productListJSON = localStorage.getItem('product');
            this.productsList = JSON.stringify(productListJSON);
        }

        if (localStorage.getItem('currentID')) {
            let currentIDJSON = localStorage.getItem('currentID');
            this.currentID = JSON.stringify(currentIDJSON);
        }

    };

};