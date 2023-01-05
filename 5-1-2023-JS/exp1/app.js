function handleSubmitEvent(e) {
    e.preventDefault();
    console.log(e);
    // const email = document.forms.login.email.value;
    // const password = document.forms.login.password.value;
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const age = document.forms.login.age;


    const emailValue = email.value;
    const passwordValue = password.value;
    const ageValue = age.value;


    const passwordErrorDisplay = password.nextElementSibling;
    const ageErrorDisplay = age.nextElementSibling;


    // if(ageValue.length > 3) {
    //     age.style.border = '1px solid red';
    //     age.nextElementSibling.classList.remove('d-none');
    //     ageErrorDisplay.innerHTML += '<li>too old</li>';
    // }
    if(ageValue <= 18) {
        age.style.border = '1px solid red';
        age.nextElementSibling.classList.remove('d-none');
        ageErrorDisplay.innerHTML += '<li>age 18+ required </li>';
    }
    if(passwordValue.length < 6) {
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li> Password must be atleast contain 6 character</li>';
    }
    if(passwordValue.includes(' ')) {
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li> Password must not contain space</li>';
    }
    console.log(password,age,email);
}