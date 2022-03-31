let submit = document.querySelector('.submit');

function validatePassword(e) {

    alert('test');

    const pw = document.querySelector('#pw');
    const pwConfirm = document.querySelector('#pw-confirm');

    const pwValue = pw.getAttribute('value');
    const pwConfirmValue = pwConfirm.getAttribute('value');

    console.log('value ' + pwValue);

    if( pwValue === null || pwConfirmValue === null || pwValue !== pwConfirmValue ){
        
        pw.classList.add('error');
        pwConfirm.classList.add('error');

        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error');
        errorMessage.innerText = '* Passwords do not match';

        pw.parentElement.appendChild(errorMessage);

    } 

}

submit.addEventListener('click', validatePassword );