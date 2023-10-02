const btn = document.querySelector('.logo');
const api_url = 'https://api.adviceslip.com/advice';
const adviceID = document.querySelector('.num');
const advice = document.querySelector('.advice');
const loadingIndicator = document.getElementById('loading-indicator');

function getRandomQuote() {
    loadingIndicator.style.display = 'block';

    fetch(api_url)
        .then(res => res.json())
        .then(data => {
            adviceID.innerText = data.slip.id;
            advice.innerText = data.slip.advice;
            loadingIndicator.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            loadingIndicator.style.display = 'none';
        });
}

btn.addEventListener('click', getRandomQuote);
getRandomQuote(); 
