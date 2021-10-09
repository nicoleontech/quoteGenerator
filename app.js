let quotes = [
    "You are enough!",
    "You are loved. You matter.",
    "Slayyyy queen",
    "You can do this!",
    "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure",
    "When you make a mistake, respond to yourself in a loving way rather than a self-shaming way.",
    "We just need to be kinder to ourselves. If we treated ourselves the way we treated our best friend, can you imagine how much better off we would be?"
]
const button = document.querySelector('#button');
const p = document.querySelector('#newQuoteSection');

button.addEventListener('click', function () {
    getQuote();
})

function getQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    p.innerHTML = quotes[randomNum];

}

