const timeInput = document.querySelector('.timeInput');
const display = document.querySelector('.display');
const date = document.querySelector('h5').innerText;

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
    display.innerHTML = `<p><b>Recorded Complete Time</b>: ${inputValue}</p>`;
    timeInput.classList.add('d-none');
};


timeInput.addEventListener('input', debounce(onInput), 500);