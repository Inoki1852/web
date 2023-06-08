let loginBtn = document.querySelector('#login button');
let loginModal = document.querySelector('#loginModal');
let overlay = document.querySelector('#overlay');
let closeModal = document.querySelector('.close');

console.log(loginBtn);

loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
});

let funcClose = function(e) {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
}

closeModal.addEventListener('click', funcClose);
overlay.addEventListener('click', funcClose);

document.querySelector('footer .links a[href="#"]').classList.add('white');
    document.querySelector('header nav a[href="#"]').classList.add('current');
