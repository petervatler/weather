const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = searchInput.value;
    messageOne.textContent = 'Loading';
    messageTwo.textContent = '';
    fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageTwo.textContent = data.location;
            messageOne.textContent = data.forecast;
        }
    })
});
});