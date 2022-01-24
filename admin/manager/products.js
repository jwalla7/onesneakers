// CLEAR INPUT FIELD ON PAGE REFRESH
window.onload = () => {
    document.forms['input-products-form']['brand-name'].value = '';
    document.forms['input-products-form']['sneaker-name'].value = '';
    document.forms['input-products-form']['price'].value = '';
    document.forms['input-products-form']['image'].value = '';
};

// INPUT FIELDS
const brandInput = document.getElementById('brand-input');
const sneakerInput = document.getElementById('sneaker-input');
const priceInput = document.getElementById('price-input');
const imageInput = document.getElementById('image-input');
const imageInputUpload = document.getElementById('image-input-upload');
const inputBrand = document.getElementById('brand-label');
const inputSneaker = document.getElementById('sneaker-label');
const inputPrice = document.getElementById('price-label');
const inputImage = document.getElementById('image-label');
const rootContainer = document.querySelector('.root-container');
const urlButton = document.querySelector('.image-url-button');
const urlBtnFont = document.querySelector('.image-url-button-letter');
const urlClearBtn = document.querySelector('.image-url-reset-button');
const urlClearBtnFont = document.querySelector('.image-url-reset-button-letter');
const brandErrorMsg = document.getElementById('brand-name-error-message');
const sneakerErrorMsg = document.getElementById('sneaker-name-error-message');
const priceErrorMsg = document.getElementById('price-error-message');
const imageErrorMsg = document.getElementById('image-error-message');

// BRAND FIELD
brandInput.addEventListener('click', () => {
    inputBrand.style.transition = '.15s ease-in-out';
    inputBrand.style.transform = 'scale(.80) translate(-6%, 0%)';
    inputBrand.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    inputBrand.style.color = 'white';
    rootContainer.addEventListener('click', () => {
        if (document.forms['input-products-form']['brand-name'].value == '') {
            inputBrand.style.transition = '';
            inputBrand.style.transform = '';
            inputBrand.style.backgroundColor = '';
            inputBrand.style.color = '';
        } else {
            inputBrand.style.transition = '.15s ease-in-out';
            inputBrand.style.transform = 'scale(.80) translate(-6%, 0%)';
        }
    }, true)
}, false);
brandInput.addEventListener('keyup', () => {
    inputBrand.style.transition = '.15s ease-in-out';
    inputBrand.style.transform = 'scale(.80) translate(-6%, 0%)';
    inputBrand.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    inputBrand.style.color = 'white';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-products-form']['brand-name'].value == '') {
            inputBrand.style.transition = '';
            inputBrand.style.transform = '';
            inputBrand.style.backgroundColor = '';
            inputBrand.style.color = '';
        } else {
            inputBrand.style.transition = '.15s ease-in-out';
            inputBrand.style.transform = 'scale(.80) translate(-6%, 0%)';    
        }
    })
});


// SNEAKER FIELD
sneakerInput.addEventListener('click', () => {
    inputSneaker.style.transition = '.15s ease-in-out';
    inputSneaker.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputSneaker.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputSneaker.style.color = 'white';
    rootContainer.addEventListener('click', () => {
        if (document.forms["input-products-form"]["sneaker-name"].value == '') {
            inputSneaker.style.transition = '';
            inputSneaker.style.transform = '';
            // inputSneaker.style.backgroundColor = '';
            // inputSneaker.style.color = '';
        } else {
            inputSneaker.style.transition = '.15s ease-in-out';
            inputSneaker.style.transform = 'scale(.80) translate(-6%, 0%)';
        }
    }, true)
}, false);
sneakerInput.addEventListener('keyup', () => {
    inputSneaker.style.transition = '.15s ease-in-out';
    inputSneaker.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputSneaker.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputSneaker.style.color = 'white';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-products-form']['sneaker-name'].value == '') {
            inputSneaker.style.transition = '';
            inputSneaker.style.transform = '';
            // inputSneaker.style.backgroundColor = '';
            // inputSneaker.style.color = '';
        } else {
            inputSneaker.style.transition = '.15s ease-in-out';
            inputSneaker.style.transform = 'scale(.80) translate(-6%, 0%)';    
        }
    })
});

// PRICE FIELD
priceInput.addEventListener('click', () => {
    inputPrice.style.transition = '.15s ease-in-out';
    inputPrice.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputPrice.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputPrice.style.color = 'white';
    rootContainer.addEventListener('click', () => {
        if (document.forms["input-products-form"]["price"].value == '') {
            inputPrice.style.transition = '';
            inputPrice.style.transform = '';
            // inputPrice.style.backgroundColor = '';
            // inputPrice.style.color = '';
        } else {
            inputPrice.style.transition = '.15s ease-in-out';
            inputPrice.style.transform = 'scale(.80) translate(-6%, 0%)';
        }
    }, true)
}, false);
priceInput.addEventListener('keyup', () => {
    inputPrice.style.transition = '.15s ease-in-out';
    inputPrice.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputPrice.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputPrice.style.color = 'white';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-products-form']['price'].value == '') {
            inputPrice.style.transition = '';
            inputPrice.style.transform = '';
            // inputPrice.style.backgroundColor = '';
            // inputPrice.style.color = '';
        } else {
            inputPrice.style.transition = '.15s ease-in-out';
            inputPrice.style.transform = 'scale(.80) translate(-6%, 0%)';    
        }
    })
});

// IMAGE FIELD
imageInput.addEventListener('click', () => {
    inputImage.style.transition = '.15s ease-in-out';
    inputImage.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputImage.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputImage.style.color = 'white';
    rootContainer.addEventListener('click', () => {
        if (document.forms["input-products-form"]["image"].value == '') {
            inputImage.style.transition = '';
            inputImage.style.transform = '';
            
            // inputImage.style.backgroundColor = '';
            // inputImage.style.color = '';
        } else {
            inputImage.style.transition = '.15s ease-in-out';
            inputImage.style.transform = 'scale(.80) translate(-6%, 0%)';
        }
    }, true)
}, false);
imageInput.addEventListener('keyup', () => {
    inputImage.style.transition = '.15s ease-in-out';
    inputImage.style.transform = 'scale(.80) translate(-6%, 0%)';
    // inputImage.style.backgroundColor = 'rgba(4, 7, 12, 1)';
    // inputImage.style.color = 'white';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-products-form']['image'].value == '') {
            inputImage.style.transition = '';
            inputImage.style.transform = '';
            // inputImage.style.backgroundColor = '';
            // inputImage.style.color = '';
        } else {
            inputImage.style.transition = '.15s ease-in-out';
            inputImage.style.transform = 'scale(.80) translate(-6%, 0%)';    
        }
    })
});

// PREVIEW BUTTON URL FIELD
urlButton.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'white';
    urlBtnFont.style.color = 'black';
    urlButton.addEventListener('mousemove', () => {
        event.target.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    })
    urlButton.addEventListener('mouseup', () => {
        event.target.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    }) 
})
urlBtnFont.addEventListener('mousedown', () => {
    urlButton.style.backgroundColor = 'white';
    urlBtnFont.style.color = 'black';
    urlBtnFont.addEventListener('mousemove', () => {
        urlButton.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    })
    urlBtnFont.addEventListener('mouseup', () => {
        urlButton.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    })
})
urlBtnFont.addEventListener('keydown', () => {
    urlButton.style.backgroundColor = 'white';
    urlBtnFont.style.color = 'black';
    urlBtnFont.addEventListener('mouseup', () => {
        urlButton.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    })
    urlBtnFont.addEventListener('keyup', () => {
        urlButton.style.backgroundColor = '';
        urlBtnFont.style.color = '';
    })
})

// CLEAR BUTTON URL FIELD
urlClearBtn.addEventListener('mousedown', (event) => {
    event.target.style.borderColor = 'white';
    urlClearBtnFont.style.color = 'black';
    imageInput.value = '';
    document.getElementById('image-preview-container') = '';
    urlClearBtn.addEventListener('mousemove', () => {
        event.target.style.borderColor = '';
    })
    urlClearBtn.addEventListener('mouseup', () => {
        event.target.style.borderColor = '';
    }) 
})
urlClearBtnFont.addEventListener('mousedown', () => {
    urlClearBtn.style.borderColor = 'white';
    urlClearBtnFont.style.color = 'black';
    imageInput.value = '';
    imageInputUpload.value = '';
    urlClearBtnFont.addEventListener('mousemove', () => {
        urlClearBtn.style.borderColor = '';
    })
    urlClearBtnFont.addEventListener('mouseup', () => {
        urlClearBtn.style.borderColor = '';
    })
})
urlClearBtnFont.addEventListener('keydown', () => {
    urlClearBtn.style.borderColor = 'white';
    urlClearBtnFont.style.color = 'black';
    imageInput.value = '';
    imageInputUpload.value = '';
    urlClearBtnFont.addEventListener('mouseup', () => {
        urlClearBtn.style.borderColor = '';
    })
    urlClearBtnFont.addEventListener('keyup', () => {
        urlClearBtn.style.borderColor = '';
    })
})

// FORM INPUT VALIDATION
const validateFormAll = () => {
    // REQUIRED FIELDS
    let brandField = document.forms["input-products-form"]["brand-name"].value;
    let sneakerField = document.forms["input-products-form"]["sneaker-name"].value;
    let priceField = document.forms["input-products-form"]["price"].value;
    let imageField = document.forms["input-products-form"]["image"].value;
    (brandField.length <= 0) ? brandErrorMsg.innerHTML = `Brand name is a required field` : document.getElementById('brand-name-error-message').innerHTML = ``;
    (sneakerField.length <= 0) ? sneakerErrorMsg.innerHTML = `Sneaker name is a required field` : document.getElementById('sneaker-name-error-message').innerHTML = ``;
    (priceField.length <= 0) ? priceErrorMsg.innerHTML = `Price is a required field` : document.getElementById('price-error-message').innerHTML = ``;
    
    let imageFile = document.getElementById('image-input-upload');
    (imageField.length <= 0 && imageFile.files.length <= 0) ? document.getElementById('image-error-message').innerHTML = `Image is a required field` : document.getElementById('image-error-message').innerHTML = ``;
};
    // BRAND FIELD
    const validateFormBrand = () => {
        let brandField = document.forms["input-products-form"]["brand-name"].value;
        (brandField.length <= 0) ? brandErrorMsg.innerHTML = `Brand name is a required field` : brandErrorMsg.innerHTML = ``;
        // (brandField != 'Nike' && brandField != 'nike') ? document.getElementById('brand-name-error-message').innerHTML = `Brand name is invalid` : document.getElementById('brand-name-error-message').innerHTML = ``;
        // (brandField != 'New Balance' && brandField != 'new balance') ? document.getElementById('brand-name-error-message').innerHTML = `Brand name is invalid, contact administrator` : document.getElementById('brand-name-error-message').innerHTML = ``;
        // (brandField != 'Adidas' && brandField != 'adidas') ? document.getElementById('brand-name-error-message').innerHTML = `Brand name is invalid, contact administrator` : document.getElementById('brand-name-error-message').innerHTML = ``;
        // (brandField != 'Converse' && brandField != 'converse') ? document.getElementById('brand-name-error-message').innerHTML = `Brand name is invalid, contact administrator` : document.getElementById('brand-name-error-message').innerHTML = ``;
        // (brandField != 'Puma' && brandField != 'puma') ? document.getElementById('brand-name-error-message').innerHTML = `Brand name is invalid, contact administrator` : document.getElementById('brand-name-error-message').innerHTML = ``;

    };
    // SNEAKER FIELD
    const validateFormSneaker = () => {
        let sneakerField = document.forms["input-products-form"]["sneaker-name"].value;
        (sneakerField.length <= 0) ? sneakerErrorMsg.innerHTML = `Sneaker name is a required field` : sneakerErrorMsg.innerHTML = ``;
    };
    // PRICE FIELD
    const validateFormPrice = () => {
        let priceField = document.forms["input-products-form"]["price"].value;
        (priceField.length <= 0) ? priceErrorMsg.innerHTML = `Price is a required field` : priceErrorMsg.innerHTML = ``;
    };
    // IMAGE & URL FIELD
    const validateFormImage = () => {
        let imageField = document.forms["input-products-form"]["image"].value;
        let imageFile = document.forms["input-products-form"]["image-upload"].value;
        (imageField.length <= 0 && imageFile.files.length <= 0) ? imageErrorMsg.innerHTML = `Image is a required field` : imageErrorMsg.innerHTML = ``;
    };

// INPUT PRODUCTS FORM SUBMIT BUTTON
const inputSubmitBtn = document.querySelector('.input-products-container-submit-container');
const inputSubmitLetter = document.querySelector('.input-products-form-submit-button');

inputSubmitBtn.addEventListener('mousedown', (event) => {
    event.target.style.borderColor = 'white';
    inputSubmitBtn.addEventListener('mousemove', () => {
        event.target.style.borderColor = '';
    })
    inputSubmitBtn.addEventListener('mouseup', () => {
        event.target.style.borderColor = '';
    }) 
})
inputSubmitLetter.addEventListener('mousedown', () => {
    inputSubmitBtn.style.borderColor = 'white';
    inputSubmitLetter.addEventListener('mousemove', () => {
        inputSubmitBtn.style.borderColor = '';
    })
    inputSubmitLetter.addEventListener('mouseup', () => {
        inputSubmitBtn.style.borderColor = '';
    })
})
inputSubmitLetter.addEventListener('keydown', (event) => {
    event.style.borderColor = 'white';
    inputSubmitLetter.addEventListener('mouseup', () => {
        inputSubmitBtn.style.borderColor = '';
    })
    inputSubmitLetter.addEventListener('keyup', () => {
        inputSubmitBtn.style.borderColor = '';
    })
})

// UPLOAD IMAGE PREVIEW DISPLAY
const showPreview = (event) => {
    if (event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById('image-preview-upload');
        preview.src = src;
        preview.style.display = "block";
    }
    document.querySelector('.image-preview-info').innerHTML = `Upload successful`;
    return true;
}


const uploadToURL = (event) => {
    if (event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
    }
};


// URL PREVIEW DISPLAY
document.getElementById('url-button').onclick = function() {
    let val = document.getElementById('image-input').value,
        src = '' + val +'',
        img = document.createElement('img');
        img.setAttribute('class', 'image-preview');
    img.src = src;
    document.getElementById('image-preview-container').appendChild(img)
    document.querySelector('.image-preview-info').innerHTML = `Upload successful`;
};

// READ UPLOAD IMAGE FILE


    // const readUploadFile = (upload) {
    //     let file = upload.files[0];
    //     let reader = new FileReader();

    //     reader.readAsText(upload);
    //     reader.onload =  () => {
    //         console.log(reader.result);
    //     }
    //     reader.onerror = () => {
    //         console.log(reader.error);
    //     }
    // }