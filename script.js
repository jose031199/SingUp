const btnCreate = document.getElementById('btnCreate');
const message = document.getElementById('message');
const txtConfirm = document.getElementById('txtConfirm');
const txtPassword = document.getElementById('txtPassword');
const txtName = document.getElementById('txtName');
const txtLastName = document.getElementById('txtLastName');
const txtEmail = document.getElementById('txtEmail');
const txtPhone = document.getElementById('txtPhone');


//function to compare passwords
let comparePassword = (e)=>{
    //Compare password
    if (txtPassword.value!=e.target.value || txtPassword.value=='') {
        message.textContent = 'Password not match';
        message.style.color='red';
        return;
    }

    txtConfirm.classList.add('active')
    message.textContent = ''
}

let isMinimunLenght=(e,value)=>{

    if (e.target.value.length>=value) {
        return true;
    }
    return false;
    //e.classList.remove('active')
}

txtConfirm.addEventListener('input',comparePassword);
txtPassword.addEventListener('input',(e)=>{
    if(isMinimunLenght(e,12) == true){
        e.target.classList.add('active')
        return;
    }
    e.target.classList.remove('active')
});

txtPhone.addEventListener('input',(e)=>{
    if(isMinimunLenght(e,12) == true){
        e.target.classList.add('active')
        return;
    }
    e.target.classList.remove('active')
});
txtEmail.addEventListener('input',(e)=>{
    if(isMinimunLenght(e,12) == true){
        e.target.classList.add('active')
        return;
    }
    e.target.classList.remove('active')
});

txtLastName.addEventListener('input',(e)=>{
    if(isMinimunLenght(e,10) == true){
        e.target.classList.add('active')
        return;
    }
    e.target.classList.remove('active')
});
txtName.addEventListener('input',(e)=>{
    if(isMinimunLenght(e,4) == true){
        e.target.classList.add('active')
        return;
    }

    e.target.classList.remove('active')
});

