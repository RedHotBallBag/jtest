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
    "You can always find hope in a dog's eyes.",
    "Dogs never lie about love. - Jeffrey Moussaieff Masson",
    "Everything I know, I learned from dogs. - Nora Roberts",
    "Dogs teach us a very important lesson in life: The mailman is not to be trusted. - Sian Ford",
    "The world would be a nicer place if everyone had the ability to love as unconditionally as a dog. - M.K. Clinton",
    "Dogs got personality. Personality goes a long way. - Quentin Tarantino",
    "I don't understand people who don't touch their pets. Their cat or dog is called a pet for a reason. - Jarod Kintz",
    "If I could be half the person my dog is, I'd be twice the human I am. - Charles Yu",
    "Dogs are not our whole life, but they make our life whole. - Roger Caras",
    "A dog can't think that much about what he's doing, he just does what feels right. - Barbara Kingsolver",
    "Dogs have given us their absolute all. We are the center of their universe. We are the focus of their love and faith and trust. They serve us in return for scraps. It is without a doubt the best deal man has ever made. - Roger A. Caras",
    "Dogs are our link to paradise. They don't know evil or jealousy or discontent. - Milan Kundera",
    "The love of a dog is a sure thing. He gives you a trust which is total. You must not betray it. - Michel Houellebecq",
    "The dog has seldom been successful in pulling man up to its level of sagacity, but man has frequently dragged the dog down to his. - James Thurber",
    "If a dog will not come to you after having looked you in the face, you should go home and examine your conscience. - Woodrow Wilson",
    "The greatest fear dogs know is the fear that you will not come back when you go out the door without them. - Stanley Coren",
    "You think those dogs will not be in heaven! I tell you they will be there long before any of us. - Robert Louis Stevenson",
    "Histories are more full of examples of the fidelity of dogs than of friends. - Alexander Pope",
    "No one appreciates the very special genius of your conversation as the dog does. - Christopher Morley",
    "I think dogs are the most amazing creatures; they give unconditional love. - Gilda Radner",
    "The dog lives for the day, the hour, even the moment. - Robert Falcon Scott",
    "The bond with a dog is as lasting as the ties of this earth can ever be. - Konrad Lorenz",
    "My fashion philosophy is, if you're not covered in dog hair, your life is empty. - Elayne Boosler",
    "You can usually tell that a man is good if he has a dog who loves him. - W. Bruce Cameron",
    "To his dog, every man is Napoleon; hence the constant popularity of dogs. - Aldous Huxley",
    "Such short little lives our pets have to spend with us, and they spend most of it watching for us to come home each day. - John Grogan",
    "The dog is the perfect portrait subject. He doesn't pose. He isn't aware of the camera. - Patrick Demarchelier",
    "To me, a dog is a teacher of life, who teaches us the principles of the most important moral values; honesty, integrity, loyalty, trust, respect, and love. - Unknown",
    "If there are no dogs in Heaven, then when I die I want to go where they went. - Will Rogers",
    "The greatest pleasure of a dog is that you may make a fool of yourself with him, and not only will he not scold you, but he will make a fool of himself, too. - Samuel Butler",
    "Dogs love their friends and bite their enemies, quite unlike people, who are incapable of pure love and always have to mix love and hate. - Sigmund Freud",
    "I'm convinced that petting a puppy is good luck. - Meg Donohue",
    "You can say any fool thing to a dog, and the dog will give you this look that says, ‘My God, you're RIGHT! I NEVER would've thought of that! - Dave Barry",
    "When we adopt a dog or any pet, we know it is going to end with us having to say goodbye, but we still do it. And we do it for a very good reason: They bring so much joy and optimism and happiness. They attack every moment of every day with that attitude. - Bruce Cameron",
    "What do dogs do on their day off? Can't lie around – that's their job. - George Carlin",
    "Don't accept your dog's admiration as conclusive evidence that you are wonderful. - Ann Landers",
    "If you want a friend, buy a dog. - Kevin O'Leary",
    "When a man's best friend is his dog, that dog has a problem. - Edward Abbey",
    "A lot of shelter dogs are mutts like me. - Barack Obama",
    "The more boys I meet, the more I love my dog. - Carrie Underwood",
    "The dog is a gentleman; I hope to go to his heaven, not man's. - Mark Twain",
    "I've seen a look in dogs' eyes, a quickly vanishing look of amazed contempt, and I am convinced that basically dogs think humans are nuts. - John Steinbeck",
    "Dogs don't rationalize. They don't hold anything against a person. They don't see the outside of a human but the inside of a human. - Cesar Millan",
    "Petting, scratching, and cuddling a dog could be as soothing to the mind and heart as deep meditation and almost as good for the soul as prayer. - Dean Koontz",
    "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals. - Winston S. Churchill",
    "A dog has one aim in life... to bestow his heart. - J.R. Ackerley",
    "The dog is the god of frolic. - Henry Ward Beecher",
    "A boy can learn a lot from a dog: obedience, loyalty, and the importance of turning around three times before lying down. - Robert Benchley",
    "If you eliminate smoking and gambling, you will be amazed to find that almost all an Englishman's pleasures can be, and mostly are, shared by his dog. - George Bernard Shaw",
    "It's not the size of the dog in the fight, it's the size of the fight in the dog. - Mark Twain",
    "The great pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too. - Samuel Butler",
    "I care not for a man's religion whose dog and cat are not the better for it. - Abraham Lincoln",
    "Dogs are not our whole life, but they make our life whole. - Roger Caras",
    "When the dog looks at you, the dog is not thinking what kind of a person you are. The dog is not judging you. - Eckhart Tolle",
    "If a dog jumps in your lap, it is because he is fond of you; but if a cat does the same thing, it is because your lap is warmer. - Alfred North Whitehead",
    "A well trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it. - Helen Thomson",
    "Anybody who doesn't know what soap tastes like never washed a dog. - Franklin P. Jones",
    "A dog is one of the remaining reasons why some people can be persuaded to go for a walk. - O.A. Battista",
    "If your dog thinks you're the greatest person in the world, don't seek a second opinion. - Jim Fiebig",
    "My dog is worried about the economy because Alpo is up to $3.00 a can. That's almost $21.00 in dog money. - Joe Weinstein",
    "Dogs' lives are too short. Their only fault, really. - Agnes Sligh Turnbull",
    "No one appreciates the very special genius of your conversation as the dog does. - Christopher Morley",
    "A dog is the only thing that can mend a crack in your broken heart. - Judy Desmond",
    "If dogs could talk, it would take a lot of the fun out of owning one. - Andy Rooney",
    "Even the tiniest Poodle or Chihuahua is still a wolf at heart. - Dorothy Hinshaw",
    "My little dog - a heartbeat at my feet. - Edith Wharton",
    "A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down. - Robert Benchley",
    "Dogs, the foremost snobs in creation, are quick to notice the difference between a well-clad and a disreputable stranger. - Albert Payson Terhune",
    "In times of joy, all of us wished we possessed a tail we could wag. - W.H. Auden",
    "I have caught more ills from people sneezing over me and giving me virus infections than from kissing dogs. - Barbara Woodhouse",
    "I think we are drawn to dogs because they are the uninhibited creatures we might be if we weren't certain we knew better. - George Bird Evans",
    "A dog can express more with his tail in seconds than his owner can express with his tongue in hours. - Karen Davison",
    "Heaven goes by favor. If it went by merit, you would stay out and your dog would go in. - Mark Twain",
    "A house without a dog is not a home. - Unknown",
    "There is no faith which has never yet been broken, except that of a truly faithful dog. - Konrad Lorenz",
    "Dogs are not our whole lives, but they make our lives whole. - Roger Caras",
    "The greatest love is a mother's; then a dog's; then a sweetheart's. - Polish Proverb",
    "No matter how little money and how few possessions you own, having a dog makes you rich. - Louis Sabin",
    "The best way to get a puppy is to beg for a baby brother – and they'll settle for a puppy every time. - Winston Pendelton",
    "The one absolutely unselfish friend that man can have in this selfish world, the one that never deserts him, the one that never proves ungrateful or treacherous, is his dog. - George Graham Vest",
    "Man is a dog's idea of what God should be. - Holbrook Jackson",
    "Every dog should have a man of his own. There is nothing like a well-behaved person around the house to spread the dog's blanket for him, or bring him his supper when he comes home man-tired at night. - Corey Ford",
    "A dog desires affection more than its dinner. Well – almost. - Charlotte Gray",
    "The great pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too. - Samuel Butler",
    "You can say any foolish thing to a dog, and the dog will give you a look that says, 'Wow, you're right! I never would've thought of that!' - Dave Barry",
    "The most affectionate creature in the world is a wet dog. - Ambrose Bierce",
    "If you want loyalty – get a dog. If you want loyalty and attention – get a smart dog. - Grant Fairley",
    "A dog is one of the few things in life that is as it seems. - Mark J. Asher",
    "To err is human, to forgive, canine. - Unknown",
    "A dog is the only thing on earth that loves you more than he loves himself. - Josh Billings",
    "When a man's best friend is his dog, that dog has a problem. - Edward Abbey",
    "Every dog has his day, unless he loses his tail, then he has a weak-end. - June Carter Cash",
    "Old dogs, like old shoes, are comfortable. They might be a bit out of shape and a little worn around the edges, but they fit well. - Bonnie Wilcox",
    "If there are no dogs in Heaven, then when I die I want to go where they went. - Will Rogers"
];

$(document).ready(function() {
    function changeQuoteAndBackground() {
        const quoteElement = $('#quote');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.text(quotes[randomIndex]);

        const randomColor = getRandomColor();
        $('body').css('background-color', randomColor);
        
        quoteElement.removeClass('animate__fadeIn').addClass('animate__fadeIn');
    }

    function getRandomColor() {
        function getRandomByte(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let r = getRandomByte(50, 200);
        let g = getRandomByte(50, 200);
        let b = getRandomByte(50, 200);

        return `rgb(${r},${g},${b})`;
    }

    function fetchDogImage() {
        $.get('https://dog.ceo/api/breeds/image/random', function(data) {
            if (data.status === 'success') {
                $('#dogImage').attr('src', data.message);
            }
        });
    }

    function fetchDogFact() {
        $.get('https://dogapi.dog/api/v2/facts', function(data) {
            if (data && data.data && data.data[0] && data.data[0].attributes && data.data[0].attributes.body) {
                const fact = data.data[0].attributes.body;
                $('#dogFact').text("Quick Dog Fact - " + fact);
            }
        });
    }

    // Initial load
    fetchDogImage();
    changeQuoteAndBackground();
    fetchDogFact();

    // Set up the button click event listener
    $("#refreshButton").click(function() {
        fetchDogImage();
        changeQuoteAndBackground();
        fetchDogFact();
    });
});
