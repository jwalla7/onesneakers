const newAccount = async () => {

    const userName = document.forms['input-customer-login-form']['full-name'].value;
    const userEmail = document.forms['input-customer-login-form']['email'].value;
    const userUsername =  document.forms['input-customer-login-form']['username'].value;
    const userPassword = document.forms['input-customer-login-form']['password'].value;
    
    const apiURL = `https://onesneakers.herokuapp.com/admin/manager/register`;
    console.log('POSTING new user to /admin/manager/register...');

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName: userName,
            username: userUsername,
            email: userEmail,
            password: userPassword 
        })
    })
    console.log(`POSTED ${response} to database`);
    document.querySelector('.create-account-success-container').style.display = "inline-block";
    
    setTimeout (() => {
        location.reload();
    }, 2500)
};
