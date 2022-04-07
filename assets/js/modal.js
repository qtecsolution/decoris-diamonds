const verifyModal = document.querySelector('#verificationModal');
const lostPasswordModal = document.querySelector('#lostPasswordModal');

// INITIALIZING MODAL TO BOOTSTARP
const verify = new bootstrap.Modal(verifyModal);
const lost = new bootstrap.Modal(lostPasswordModal);

const verifyButton = document.querySelector('#btn-verify');

verifyButton.addEventListener('click', showLostPassword);


// SHOW LOSTPASSWORD
function showLostPassword() {
    verify.hide();
    lost.show();
}