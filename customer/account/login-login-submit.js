const newLogin = async () => {

    const userName = document.forms['input-customer-login-form']['full-name'].value;
    const userEmail = document.forms['input-customer-login-form']['email'].value;
    const userUsername =  document.forms['input-customer-login-form']['username'].value;
    const userPassword = document.forms['input-customer-login-form']['password'].value;
    
    const apiURL = `https://onesneakers.herokuapp.com/admin/manager/myaccess`;
    console.log('GETTING new user to /admin/manager/myaccess...');

    const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
            // 'Accept': 'application/json',
            'Authorization': 'Basic ' + btoa(`${userEmail}:${userPassword}`)
            // 'Content-Type': 'application/json'
        }
    })
    // window.location.assign(`https://onesneakers.herokuapp.com/admin/manager/myaccess`);
    // console.log(`GET ${response} to database`);
};
