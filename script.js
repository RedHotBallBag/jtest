const quotes = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
    // You can add more quotes as per your liking
];

window.onload = function() {
    // Display a random quote
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

    // Change background color
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
