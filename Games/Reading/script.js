// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to pick a random item from an array
function pickRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Array of success audio files
const successAudios = ['goodonya.mp3', 'ulegend.mp3', 'urockstar.mp3', 'welldone.mp3', 'crushingit.mp3'];


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
    { text: 'Tam dug a pit.', options: ['ifshole.jfif', 'ifsdragon.jfif', 'ifsgum.jfif', 'cattrap.jfif'], correct: 'ifshole' },
];

// Shuffle the sentences and their options
shuffleArray(sentences);
sentences.forEach(sentence => shuffleArray(sentence.options));

let currentSentence = 0;

function loadSentence() {
    const sentenceElement = document.getElementById('sentence');
    sentenceElement.textContent = sentences[currentSentence].text;

    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    sentences[currentSentence].options.forEach((option) => {
        const img = document.createElement('img');
        img.src = option;
        img.alt = option;
        img.onclick = () => checkAnswer(option.split('.')[0]);
        choicesElement.appendChild(img);
    });
}

function checkAnswer(answer) {
    const audio = new Audio();
    if (answer === sentences[currentSentence].correct) {
        audio.src = pickRandomItem(successAudios); // Pick a random success audio
        audio.play();
    } else {
        audio.src = 'nahsorry.mp3';
        audio.play();
    }

    currentSentence++;
    if (currentSentence < sentences.length) {
        loadSentence();
    } else {
        gameOver();
    }
}

function gameOver() {
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';

    const img = document.createElement('img');
    img.src = 'over.png';
    img.alt = 'Game Over';
    img.onclick = () => window.location.href = 'https://cpcd.netlify.app/games';
    choicesElement.appendChild(img);
}

window.onload = function() {
    loadSentence();

    const gameContainer = document.querySelector('.game-container');
    const sentence = document.querySelector('.sentence');
    const choices = document.querySelector('.choices');

    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    sentence.style.top = `${(containerHeight * 0.25)}px`;
    sentence.style.left = `${(containerWidth * 0.18)}px`;

    choices.style.top = `${(containerHeight * 0.6)}px`;
};