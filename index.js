const quote = document.getElementById('quote');
const quoteId = document.getElementById('quote-id');

const errorMessage = "Ooops! Error occured while fetching data. TRY AGAIN.";

const button = document.getElementById('button');

const handleButtonClick = (e) => {
    fetch('https://api.adviceslip.com/advice')
    .then((result) => result.json())
    .then((result) => {
        const quoteObj = result.slip;
        console.log(quoteObj);
        quote.textContent = quoteObj.advice;
        quoteId.textContent = quoteObj.id;
    })
    .catch((error) => quote.textContent = errorMessage);
}

button.addEventListener("click", handleButtonClick);