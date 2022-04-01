let form = document.querySelector('#c-form');

function validatePassword(e) {

    const pw = document.querySelector('#pw');
    const pwConfirm = document.querySelector('#pw-confirm');

    const pwValue = pw.value;
    const pwConfirmValue = pwConfirm.value;

    if( pwValue === null || pwConfirmValue === null || pwValue !== pwConfirmValue ){

        e.preventDefault();
        
        if( document.querySelector('.error') === null ){
            pw.classList.add('error');
            pwConfirm.classList.add('error');

            const errorMessage = document.createElement('span');
            errorMessage.classList.add('error');
            errorMessage.innerText = '* Passwords do not match';

            pw.parentElement.appendChild(errorMessage);
        }

    } 

}

form.addEventListener('submit', validatePassword );