const quotes = [
    "Dogs do speak, but only to those who know how to listen. - Orhan Pamuk",
    "The better I get to know men, the more I find myself loving dogs. - Charles De Gaulle",
    "Every dog must have his day. - Jonathan Swift",
    "My little dog - a heartbeat at my feet. - Edith Wharton",
    "The road to my heart is paved with paw prints.",
    "A dog is the only thing on earth that loves you more than he loves himself. - Josh Billings",
    "Happiness is a warm puppy. - Charles M. Schulz",
    "Dogs are not our whole life, but they make our lives whole. - Roger Caras",
    "A house is not a home without a dog.",
    "The bond with a true dog is as lasting as the ties of this earth will ever be. - Konrad Lorenz",
    "A dog wags its tail with its heart. - Martin Buxbaum",
    "Dogs are our link to paradise. - Milan Kundera",
    "The world would be a nicer place if everyone had the ability to love as unconditionally as a dog. - M.K. Clinton",
    "The average dog is a nicer person than the average person. - Andy Rooney",
    "When an 85-pound mammal licks your tears away, then tries to sit on your lap, it’s hard to feel sad. - Kristan Higgins",
    "The love of a dog is a pure thing. He gives you a trust which is total. You must not betray it. - Michel Houellebecq",
    "Dogs have a way of finding people who need them, and filling an emptiness we didn’t ever know we had. - Thom Jones",
    "No matter how you’re feeling, a little dog gonna love you. - Waka Flocka Flame",
    "The greatest pleasure of a dog is that you may make a fool of yourself with him, and not only will he not scold you, but he will make a fool of himself too. - Samuel Butler",
    "To sit with a dog on a hillside on a glorious afternoon is to be back in Eden. - Milan Kundera",
    "When a dog loves you, you feel flattered. When a wolf befriends you, you will be moved close to tears. - Anonymous",
    "Dogs are the universe's way of apologizing for your relatives.",
    "There is no psychiatrist in the world like a puppy licking your face. - Bernard Williams",
    "Money can buy a lot of things, but it doesn't wiggle its butt every time you come in the door.",
    "I have found that when you are deeply troubled, there are things you get from the silent devoted companionship of a dog that you can get from no other source. - Doris Day",
    "Dogs' lives are too short. Their only fault, really. - Agnes Sligh Turnbull",
    "Be the person your dog thinks you are.",
    "A well-trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it. - Helen Thomson",
    "Dogs never bite me. Just humans. - Marilyn Monroe",
    "If there are no dogs in Heaven, then when I die I want to go where they went. - Will Rogers",
    "To err is human — to forgive, canine.",
    "There’s a saying. If you want someone to love you forever, buy a dog, feed it and keep it around. - Dick Dale",
    "If you think dogs can't count, try putting three dog biscuits in your pocket and then giving Fido only two of them.",
    "The dog is a gentleman; I hope to go to his heaven, not man's. - Mark Twain",
    "I work hard so my dog can have a better life.",
    "Dog hair is my glitter.",
    "Dogs are great. Bad dogs, if you can really call them that, are perhaps the greatest of them all. - John Grogan",
    "I think dogs are the most amazing creatures; they give unconditional love. For me, they are the role model for being alive. - Gilda Radner",
    "A dog can express more with his tail in minutes than his owner can express with his tongue in hours.",
    "Dogs are like that, I guess – they know how to fix you, without ever saying a word.",
    "Dogs come into our lives to teach us about love, they depart to teach us about loss. A new dog never replaces an old dog. It merely expands the heart.",
    "Dogs have a way of understanding people, which never fails to amaze me. - Magdalena VandenBerg",
    "Dogs leave pawprints on our hearts.",
    "If my dog makes you uncomfortable, I’d be happy to lock you up in the other room.",
    "I believe in integrity. Dogs have it. Humans are sometimes lacking it.",
    "The world would be a nicer place if everyone loved as unconditionally as a dog.",
    "If you pick up a starving dog and make him prosperous, he will not bite you. This is the principal difference between a dog and a man. - Mark Twain",
    "The dog was created especially for children. He is a god of frolic. - Henry Ward Beecher",
    "Every snack you make, every meal you bake, every bite you take, I'll be watching you.",
    "You want a friend in Washington? Get a dog. - Harry Truman",
    "If dogs could talk, perhaps we would find it as hard to get along with them as we do with people.",
    "The reason a dog has so many friends is that he wags his tail instead of his tongue.",
    "I'm not alone, said the boy, I've got a puppy.",
    "The more people I meet, the more I like my dog.",
    "A dog might destroy your shoes but will never break your heart.",
    "Dogs are wise. They crawl away into a quiet corner and lick their wounds and do not rejoin the world until they are whole once more. - Agatha Christie",
    "You can trust your dog to guard your house but never trust your dog to guard your sandwich.",
    "Dogs are better than human beings because they know but do not tell. - Emily Dickinson",
    "Dogs ask for so little but deserve so much.",
    "A dog will teach you unconditional love. If you can have that in your life, things won’t be too bad. - Robert Wagner",
    "You can always find hope in a dog's eyes."
];

async function fetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
}

function changeQuoteAndBackground() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    quoteElement.classList.remove('animate__animated');
    quoteElement.classList.remove('animate__fadeIn');
    void quoteElement.offsetWidth;  // This line is necessary to restart the animation
    quoteElement.classList.add('animate__animated');
    quoteElement.classList.add('animate__fadeIn');
}

window.onload = async function() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('quote').style.display = 'block';

    // Display a random dog image on initial load
    const dogImageElement = document.getElementById('dogImage');
    dogImageElement.src = await fetchDogImage();

    // Display a random quote and background on initial load
    changeQuoteAndBackground();
}

// Set up the button click event listener
document.getElementById("refreshButton").addEventListener("click", async function() {
    // Display a new random dog image
    const dogImageElement = document.getElementById('dogImage');
    dogImageElement.src = await fetchDogImage();
    
    changeQuoteAndBackground();
});


function getRandomColor() {
    function getRandomByte(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let r = getRandomByte(50, 200);
    let g = getRandomByte(50, 200);
    let b = getRandomByte(50, 200);

    return `rgb(${r},${g},${b})`;
}

