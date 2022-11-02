// const timeInput = document.querySelector('.timeInput');
const date = document.querySelector('.date');
const title = document.querySelector('h3');
const scale = document.querySelector('#scaleType');
const para = document.createElement("p");

// console.log(title.value)
// const date = document.querySelector('.date');
// const scaleType = document.querySelector('.date');
// const date = document.querySelector('#date').innerText;
// const scaleType = document.getElementById('scaleType');

const form = document.querySelector('form');

const debounce = (func, delay=1000) => {
    let timeoutID;
    return (...arg) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() =>  {
            func.apply(null, arg);
        }, delay)
    };
};

const onInput = (e) => {
    const inputValue = e.target.value;
    console.log(e.target.value);
    title.innerHTML = `${inputValue}`;
    scale.innerHTML = `${inputValue}`;
    
    // display.innerHTML = `<p><b>${inputValue}</p>`;
    date.classList.add('hidden');
};

// timeInput.addEventListener('input', debounce(onInput), 500);
form.addEventListener('input', debounce(onInput), 500);
// title.addEventListener('input', debounce(onInput), 500);


// if (message) {
//     document.querySelector('#message-form').classList.add('hide');
//     document.querySelector('#message-show').classList.remove('hide');

//     document.querySelector('h1').innerHTML = message;
// }

// document.querySelector('form').addEventListener('submit', event => {
//     event.preventDefault();

//     document.querySelector('#message-form').classList.add('hide');
//     document.querySelector('#link-form').classList.remove('hide');

//     const input = document.querySelector('#message-input');
//     const encrypted = btoa(input.value);
    
//     const linkInput = document.querySelector('#link-input');
//     linkInput.value = `${window.location}#${encrypted}`;
//     linkInput.select()
// });