// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Define the sentences, image options, and correct answers
const sentences = [
    { text: 'The cat is hot.', options: ['cat_hot.png.jpeg', 'cat_bike.jpeg', 'dog_hot.png.jpeg', 'sadcrab.jpeg'], correct: 'cat_hot' },
    { text: 'The bug can hop.', options: ['bughop.jpeg', 'foxhop.jpeg', 'foxbox.jpeg', 'dog_hot.png.jpeg'], correct: 'bughop' },
    { text: 'I can run.', options: ['ising.jpeg', 'ieat.jpeg', 'irun.jpeg','foxbox.jpeg'], correct: 'irun' },
    { text: 'The hen has a red cap.', options: ['hencap.jpeg', 'henshirt.jpeg', 'henshoe.jpeg', 'irun.jpeg'], correct: 'hencap' },
    { text: 'The web is wet.', options: ['webwet.jpeg', 'webfire.jpeg', 'netwet.jpeg', 'henshoe.jpeg'], correct: 'webwet' },
    { text: 'I am sad.', options: ['ihappy.jpeg', 'imad.jpeg', 'isad.jpeg', 'netwet.jpeg'], correct: 'isad' },
    { text: 'A lamp in a pond', options: ['lamp.jpeg', 'clam.jpeg', 'lamb.jpeg', 'isad.jpeg'], correct: 'lamp' },
    { text: 'A frog on a log.', options: ['froglog.jpeg', 'logfrog.jpeg', 'frogleaf.jpeg', 'lamb.jpeg'], correct: 'froglog' },
    { text: 'The crab is fast.', options: ['fastcrab.jpeg', 'sadcrab.jpeg', 'fastrat.jpeg', 'frogleaf.jpeg'], correct: 'fastcrab' },
    { text: 'The tent is big.', options: ['bigtent.jpeg', 'bigten.jpeg', 'bigclown.jpeg', 'fastrat.jpeg'], correct: 'bigtent' },
    { text: 'The brick drops in the net.', options: ['brick.jfif', 'trucknet.jfif', 'truckwings.jfif', 'bigclown.jpeg'], correct: 'brick' },
    { text: 'The truck stops at red.', options: ['truckstops.jfif', 'trucknet.jfif', 'racecar.jfif', 'truckwings.jfif'], correct: 'truckstops' },
    { text: 'A rat traps a cat.', options: ['rattrap.png', 'cattrap2.jfif', 'rateat.jfif', 'racecar.jfif'], correct: 'cattrap2' },
    { text: 'The cat is from France.', options: ['frenchcat.jfif', 'aussiecat.jfif', 'ukcat.jfif', 'singcat.jfif'], correct: 'frenchcat' },
    { text: 'The cat has a glass of milk', options: ['catmilk.jfif', 'ratmilk.jfif', 'lionmilk.jfif', 'catwine.jfif'], correct: 'catmilk' },
    { text: 'Syl has a gift', options: ['sylgift.jfif', 'syldog.jfif', 'sylroo.jfif', 'catwine.jfif'], correct: 'sylgift' },
    { text: 'Tom grabs a crab', options: ['tomcrab.jfif', 'tomshark.jfif', 'tomlion.jfif', 'cattrap.jfif'], correct: 'tomcrab' },
    { text: 'Tam dug a hole.', options: ['ifshole.jfif', 'ifsdragon.jfif', 'ifsgum.jfif', 'cattrap.jfif'], correct: 'ifshole' },
];

// Shuffle the sentences
shuffleArray(sentences);

// Shuffle the options for each sentence
sentences.forEach(sentence => shuffleArray(sentence.options));

let currentSentence = 0;

function loadSentence() {
    // Load the sentence
    const sentenceElement = document.getElementById('sentence');
    sentenceElement.textContent = sentences[currentSentence].text;

    // Load the image options
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = ''; // Clear existing choices
    sentences[currentSentence].options.forEach((option) => {
        const img = document.createElement('img');
        img.src = option;
        img.alt = option;
        img.onclick = () => checkAnswer(option.split('.')[0]); // Remove the file extension
        choicesElement.appendChild(img);
    });
}

// ... (the rest of your code remains the same until the checkAnswer function)

function checkAnswer(answer) {
    const audio = new Audio();
    if (answer === sentences[currentSentence].correct) {
        audio.src = 'goodonya.mp3';
        audio.play();
    } else {
        audio.src = 'nahsorry.mp3';
        audio.play();
    }

    // Load the next sentence (only once)
    currentSentence++;
    if (currentSentence < sentences.length) {
        loadSentence();
    } else {
        gameOver();
    }
}

// New game over function
function gameOver() {
    // Clear existing content
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    
    // Create a game over image and append it
    const img = document.createElement('img');
    img.src = 'over.png';
    img.alt = 'Game Over';
    img.onclick = () => window.location.href = 'https://cpcd.netlify.app/games';
    choicesElement.appendChild(img);
}

// ... (the rest of your code remains the same)


// Initialize the game and set positions
window.onload = function() {
    loadSentence();

    const gameContainer = document.querySelector('.game-container');
    const sentence = document.querySelector('.sentence');
    const choices = document.querySelector('.choices');

    // Get the dimensions of the game container
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    // Set the position of the sentence based on the dimensions
    sentence.style.top = `${(containerHeight * 0.25)}px`;
    sentence.style.left = `${(containerWidth * 0.18)}px`;

    // Set the position of the image choices based on the dimensions
    choices.style.top = `${(containerHeight * 0.6)}px`;
    
};
