'use strict'
const answer = [`Yes, You're Lucky Today. Have a Nice Day`, `Oh No, You're Not Lucky Today. Be Careful Out There`]; 

const text = document.querySelector('.text-jokes');
const button = document.querySelector('.button');
let hasNotClick = true;

button.addEventListener('click', function() {
    if(hasNotClick) {
        // console.log('TOMBOL TERKLIK');
        const randomNumber = Math.trunc(Math.random() * 2);

        text.textContent = answer[randomNumber];
        hasNotClick = false;
    }
});



