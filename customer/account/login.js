// FORM INPUT FIELDS
const rootContainer = document.getElementById('root-container');

const formPlaceholderContainer = document.querySelector('.placeholder-container');
const formErrorMessageContainer = document.querySelector('.form-input-error');
const formInputField = document.querySelector('.form-input');

const namePlaceholderContainer = document.getElementById('full-name-placeholder-container');
const nameErrorMessageContainer = document.getElementById('name-input-error-container');
const formNameField = document.getElementById('name-input');
const formNameErrorMessageText = document.getElementById('full-name-error-text');

const emailPlaceholderContainer = document.getElementById('email-placeholder-container');
const emailErrorMessageContainer = document.getElementById('email-input-error-container');
const formEmailField = document.getElementById('email-input');
const formEmailErrorMessageText = document.getElementById('email-error-text');

const usernamePlaceholderContainer = document.getElementById('username-placeholder-container');
const usernameErrorMessageContainer = document.getElementById('username-input-error-container');
const formUsernameField = document.getElementById('username-input');
const formUsernameErrorMessageText = document.getElementById('username-error-text');

const passwordPlaceholderContainer = document.getElementById('password-placeholder-container');
const passwordErrorMessageContainer = document.getElementById('password-input-error-container');
const formPasswordField = document.getElementById('password-input');
const formPasswordErrorMessageText = document.getElementById('password-error-text');

const submitBtnContainer = document.getElementById('submit-button-outer');
const submitBtnText = document.getElementById('submit-button-inner');

// Full name
formNameField.addEventListener('click', () => {
    namePlaceholderContainer.style.transition = '.15s ease-in-out';
    namePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    namePlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('click', () => {
        if (document.forms['input-customer-login-form']['full-name'].value == '') {
            namePlaceholderContainer.style.transition = '';
            namePlaceholderContainer.style.transform = '';
            namePlaceholderContainer.style.opacity = '';
            // empty error message
            nameErrorMessageContainer.style.visibility = 'visible';
            formNameField.style.border = '1px solid red';
            formNameErrorMessageText.innerHTML = `*Full name is a required field`;
        } else {
            namePlaceholderContainer.style.transition = '.15s ease-in-out';
            namePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            namePlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            nameErrorMessageContainer.style.visibility = '';
            formNameField.style.border = '';
            formNameErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);
formNameField.addEventListener('keyup', () => {
    namePlaceholderContainer.style.transition = '.15s ease-in-out';
    namePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    namePlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-customer-login-form']['full-name'].value == '') {
            namePlaceholderContainer.style.transition = '';
            namePlaceholderContainer.style.transform = '';
            namePlaceholderContainer.style.opacity = '';
            // empty error message
            nameErrorMessageContainer.style.visibility = 'visible';
            formNameField.style.border = '1px solid red';
            formNameErrorMessageText.innerHTML = `*Full name is a required field`;
        } else {
            namePlaceholderContainer.style.transition = '.15s ease-in-out';
            namePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            namePlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            nameErrorMessageContainer.style.visibility = '';
            formNameField.style.border = '';
            formNameErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);

// Email
formEmailField.addEventListener('click', () => {
    emailPlaceholderContainer.style.transition = '.15s ease-in-out';
    emailPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    emailPlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('click', () => {
        if (document.forms['input-customer-login-form']['email'].value == '') {
            emailPlaceholderContainer.style.transition = '';
            emailPlaceholderContainer.style.transform = '';
            emailPlaceholderContainer.style.opacity = '';
            // empty error message
            emailErrorMessageContainer.style.visibility = 'visible';
            formEmailField.style.border = '1px solid red';
            formEmailErrorMessageText.innerHTML = `*Email is a required field`;
        } else {
            emailPlaceholderContainer.style.transition = '.15s ease-in-out';
            emailPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            emailPlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            emailErrorMessageContainer.style.visibility = '';
            formEmailField.style.border = '';
            formEmailErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);
formEmailField.addEventListener('keyup', () => {
    emailPlaceholderContainer.style.transition = '.15s ease-in-out';
    emailPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    emailPlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-customer-login-form']['email'].value == '') {
            emailPlaceholderContainer.style.transition = '';
            emailPlaceholderContainer.style.transform = '';
            emailPlaceholderContainer.style.opacity = '';
            // empty error message
            emailErrorMessageContainer.style.visibility = 'visible';
            formEmailField.style.border = '1px solid red';
            formEmailErrorMessageText.innerHTML = `*Email is a required field`;
        } else {
            emailPlaceholderContainer.style.transition = '.15s ease-in-out';
            emailPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            emailPlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            emailErrorMessageContainer.style.visibility = '';
            formEmailField.style.border = '';
            formEmailErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);

// Username
formUsernameField.addEventListener('click', () => {
    usernamePlaceholderContainer.style.transition = '.15s ease-in-out';
    usernamePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    usernamePlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('click', () => {
        if (document.forms['input-customer-login-form']['username'].value == '') {
            usernamePlaceholderContainer.style.transition = '';
            usernamePlaceholderContainer.style.transform = '';
            usernamePlaceholderContainer.style.opacity = '';
            // empty error message
            usernameErrorMessageContainer.style.visibility = 'visible';
            formUsernameField.style.border = '1px solid red';
            formUsernameErrorMessageText.innerHTML = `*Username is a required field`;
        } else {
            usernamePlaceholderContainer.style.transition = '.15s ease-in-out';
            usernamePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            usernamePlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            usernameErrorMessageContainer.style.visibility = '';
            formUsernameField.style.border = '';
            formUsernameErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);
formUsernameField.addEventListener('keyup', () => {
    usernamePlaceholderContainer.style.transition = '.15s ease-in-out';
    usernamePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    usernamePlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-customer-login-form']['username'].value == '') {
            usernamePlaceholderContainer.style.transition = '';
            usernamePlaceholderContainer.style.transform = '';
            usernamePlaceholderContainer.style.opacity = '';
            // empty error message
            usernameErrorMessageContainer.style.visibility = 'visible';
            formUsernameField.style.border = '1px solid red';
            formUsernameErrorMessageText.innerHTML = `*Username is a required field`;
        } else {
            usernamePlaceholderContainer.style.transition = '.15s ease-in-out';
            usernamePlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            usernamePlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            usernameErrorMessageContainer.style.visibility = '';
            formUsernameField.style.border = '';
            formUsernameErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);

// Password
formPasswordField.addEventListener('click', () => {
    passwordPlaceholderContainer.style.transition = '.15s ease-in-out';
    passwordPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    passwordPlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('click', () => {
        if (document.forms['input-customer-login-form']['password'].value == '') {
            passwordPlaceholderContainer.style.transition = '';
            passwordPlaceholderContainer.style.transform = '';
            passwordPlaceholderContainer.style.opacity = '';
            // empty error message
            passwordErrorMessageContainer.style.visibility = 'visible';
            formPasswordField.style.border = '1px solid red';
            formPasswordErrorMessageText.innerHTML = `*Password is a required field`;
        } else {
            passwordPlaceholderContainer.style.transition = '.15s ease-in-out';
            passwordPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            passwordPlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            passwordErrorMessageContainer.style.visibility = '';
            formPasswordField.style.border = '';
            formPasswordErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);
formPasswordField.addEventListener('keyup', () => {
    passwordPlaceholderContainer.style.transition = '.15s ease-in-out';
    passwordPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
    passwordPlaceholderContainer.style.opacity = '90%';
    rootContainer.addEventListener('keydown', () => {
        if (document.forms['input-customer-login-form']['password'].value == '') {
            passwordPlaceholderContainer.style.transition = '';
            passwordPlaceholderContainer.style.transform = '';
            passwordPlaceholderContainer.style.opacity = '';
            // empty error message
            passwordErrorMessageContainer.style.visibility = 'visible';
            formPasswordField.style.border = '1px solid red';
            formPasswordErrorMessageText.innerHTML = `*Password is a required field`;
        } else {
            passwordPlaceholderContainer.style.transition = '.15s ease-in-out';
            passwordPlaceholderContainer.style.transform = 'scale(.80) translate(-6%, 35%)';
            passwordPlaceholderContainer.style.opacity = '90%';
            // reset empty error message
            passwordErrorMessageContainer.style.visibility = '';
            formPasswordField.style.border = '';
            formPasswordErrorMessageText.innerHTML = ``;
        }
    }, true)
}, false);
// Password Show/Hide Toggle
const togglePassword = document.getElementById('password-toggle-icon');

togglePassword.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = 'white';
    togglePassword.addEventListener('mouseup', () => {
        event.target.style.backgroundColor = '';
        event.target.style.color = '';
    })
})
togglePassword.addEventListener('click', function (event) {
    const type = formPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    formPasswordField.setAttribute('type', type);
});

// SUBMIT BUTTON
submitBtnContainer.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'transparent';
    submitBtnText.style.color = 'white';
    submitBtnContainer.addEventListener('mousemove', () => {
        event.target.style.backgroundColor = '';
        submitBtnText.style.color = '';
    })
    submitBtnContainer.addEventListener('mouseup', () => {
        event.target.style.backgroundColor = '';
        submitBtnText.style.color = '';
    }) 
})
submitBtnText.addEventListener('mousedown', () => {
    submitBtnContainer.style.backgroundColor = 'transparent';
    submitBtnText.style.color = 'white';
    submitBtnText.addEventListener('mousemove', () => {
        submitBtnContainer.style.backgroundColor = '';
        submitBtnText.style.color = '';
    })
    submitBtnText.addEventListener('mouseup', () => {
        submitBtnContainer.style.backgroundColor = '';
        submitBtnText.style.color = '';
    })
})
submitBtnText.addEventListener('keydown', (event) => {
    event.style.backgroundColor = 'transparent';
    submitBtnText.style.color = 'white';
    submitBtnText.addEventListener('mouseup', () => {
        submitBtnContainer.style.backgroundColor = '';
        submitBtnText.style.color = '';
    })
    submitBtnText.addEventListener('keyup', () => {
        submitBtnContainer.style.backgroundColor = '';
        submitBtnText.style.color = '';
    })
})

// CREATE ACCOUNT BUTTON
const registerBtnContainer = document.querySelector('.customer-form-register-container');
const registerBtnText = document.querySelector('.customer-form-register-button');
registerBtnContainer.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'transparent';
    registerBtnContainer.addEventListener('mousemove', () => {
        event.target.style.backgroundColor = '';
    })
    registerBtnContainer.addEventListener('mouseup', () => {
        event.target.style.backgroundColor = '';
    }) 
})
registerBtnText.addEventListener('mousedown', () => {
    registerBtnContainer.style.backgroundColor = 'transparent';
    registerBtnText.addEventListener('mousemove', () => {
        registerBtnContainer.style.backgroundColor = '';
        registerBtnText.style.color = '';
    })
    registerBtnText.addEventListener('mouseup', () => {
        registerBtnContainer.style.backgroundColor = '';
    })
})
registerBtnText.addEventListener('keydown', (event) => {
    event.style.backgroundColor = 'transparent';
    registerBtnText.addEventListener('mouseup', () => {
        registerBtnContainer.style.backgroundColor = '';
    })
    registerBtnText.addEventListener('keyup', () => {
        registerBtnContainer.style.backgroundColor = '';
    })
})

// FORM VALIDATIONS
// NAME FIELD
const validateFormName = () => {
    let nameField = document.forms["input-customer-login-form"]["full-name"].value;
    (nameField.length <= 0) ? formNameErrorMessageText.innerHTML = `*Full name is a required field` : formNameErrorMessageText.innerHTML = ``;
};
const validateFormEmail = () => {
    let emailField = document.forms["input-customer-login-form"]["email"].value;
    (emailField.length <= 0) ? formNameErrorMessageText.innerHTML = `*Email is a required field` : formNameErrorMessageText.innerHTML = ``;
};
const validateFormUsername = () => {
    let usernameField = document.forms["input-customer-login-form"]["username"].value;
    (usernameField.length <= 0) ? formNameErrorMessageText.innerHTML = `*Username is a required field` : formNameErrorMessageText.innerHTML = ``;
};
const validateFormPassword = () => {
    let passwordField = document.forms["input-customer-login-form"]["password"].value;
    (passwordField.length <= 0) ? formNameErrorMessageText.innerHTML = `*Password is a required field` : formNameErrorMessageText.innerHTML = ``;
};
