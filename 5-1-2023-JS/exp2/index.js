let form = document.querySelector('form');
form.addEventListener('submit',function(event) {
    event.preventDefault();
    console.log('submitted');
    let fText = document.querySelector('#fName');
    let fText2 = document.querySelector('#lName');
    let fPassword = document.querySelector('#PasswordId');

    if (fText.value.length <=2) {
        let fMessage = document.querySelector('#firstNameError');
        fMessage.style.display = 'block';
        fMessage.innerText = 'Inavalid Name';
    }
    else{
        let fMessage = document.querySelector('#firstNameError');
        fMessage.style.display = 'none';
    }

    if (fText2.value.length <=1) {
        let fMessage = document.querySelector('#lastNameError');
        fMessage.style.display = 'block';
        fMessage.innerText = 'Inavalid Name';
    }
    else{
        let fMessage = document.querySelector('#lastNameError');
        fMessage.style.display = 'none';
    }

    if (fPassword.value.length <=6) {
        let fMessage = document.querySelector('#passwordError');
        fMessage.style.display = 'block';
        fMessage.innerText = 'Password should be minimum 6 charactor';
    }
    else{
        let fMessage = document.querySelector('#passwordError');
        fMessage.style.display = 'none';
    }
});