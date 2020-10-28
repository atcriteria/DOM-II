// Your code goes here

// 1) Header Image manipulation
let headImg = document.querySelector(".intro img");
headImg.addEventListener('mouseover', event => {
    if (headImg.style.transform !== "scaleX(-1)"){
        headImg.style.transform = "scaleX(-1)";
    } else {
        headImg.style.transform = "scaleX(1)";
    }
});

// 2) nav container manipulation
let navContain = document.querySelector(".nav-container");
document.addEventListener('keydown', event => {
    (event.key === 'Escape') ? changeNavColor() : 0;
});

let changeNavColor = function(){
    navContain.style.backgroundColor = 'skyblue';
}

// 3) nav container manipulation 2, zoom event

// This was taken from MDN to experiment with the zooming of the img
function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    headImg.style.transform = `scale(${scale})`
}
let scale = 1;
headImg.onwheel = zoom;

// load test .. 

// 4) we have to run this event on the window to ensure the entire page is loaded..
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// focus test ..

// 5) Added a form and input field to test these out on.
const textArea = document.querySelector('input[type="password"]');
console.log(textArea);

textArea.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'pink';
});

textArea.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
});

// resize test ..

// 6) I'll copy MDN's example of reporting the height and width of the web page
const heighOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
function reportWindowSize(){
    heighOutput.innerHTML = window.innerHeight;
    widthOutput.innerHTML = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);

// Scroll Test
let count = 0;
window.addEventListener('scroll', (event) => {
    count ++;
    console.log(count);
})

// Select Test, this is only working if I copy the text that appears in the password form field... hmmmm......

let selectedText = document.querySelector('.content-section .text-content p');

function logSelection (event){
    console.log('you selected some text')
}

window.addEventListener('select', logSelection);


// DblClick Test

let divs = document.querySelectorAll("div");
console.log(divs);
Array.from(divs).forEach((div) => {
    div.addEventListener('dblclick', (event) => {
        div.style.backgroundColor = 'red';
    });
});


// Make the nav buttons prevent default functionality

let buttons = document.querySelectorAll(".nav-link");
Array.from(buttons).forEach((link) => {
    link.addEventListener('click', (event) => {
        console.log(
            `stopping default behavior for "${event.target.textContent}" link`
        );
        event.preventDefault();
    });
})