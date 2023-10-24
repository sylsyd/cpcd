let selectedLetters = [];
let correctWord = ''; // Initialize as empty string
let allLetters = []; // Initialize as empty array

const words = [
    {word: 'cat', imagePath: 'cvc/cat.png', choices: ['c', 'a', 't', 'p', 'n', 'e']},
    {word: 'bed', imagePath: 'cvc/bed.png', choices: ['c', 'u', 'b', 'a', 'd', 'e']},
    {word: 'bin', imagePath: 'cvc/bin.png', choices: ['b', 'o', 'j', 'f', 'n', 'i']},
    {word: 'box', imagePath: 'cvc/box.png', choices: ['j', 'z', 'x', 'a', 'o', 'b']},
    {word: 'bug', imagePath: 'cvc/bug.png', choices: ['g', 't', 'u', 'b', 'z', 'm']},
    {word: 'cot', imagePath: 'cvc/cot.png', choices: ['i', 't', 'c', 'a', 'o', 'r']},
    {word: 'cub', imagePath: 'cvc/cub.png', choices: ['m', 'i', 'b', 'u', 'c', 'g']},
    {word: 'dog', imagePath: 'cvc/dog.png', choices: ['k', 'b', 'o', 'i', 'g', 'd']},
    {word: 'fin', imagePath: 'cvc/fin.png', choices: ['i', 'x', 'c', 'n', 'f', 'g']},
    {word: 'hen', imagePath: 'cvc/hen.png', choices: ['n', 'p', 'w', 'h', 'r', 'e']},
    {word: 'hop', imagePath: 'cvc/hop.png', choices: ['y', 'h', 'g', 'o', 'j', 'p']},
    {word: 'hut', imagePath: 'cvc/hut.png', choices: ['h', 'p', 'u', 'o', 'e', 't']},
    {word: 'jam', imagePath: 'cvc/jam.png', choices: ['d', 'j', 'a', 'c', 'm', 'b']},
    {word: 'jet', imagePath: 'cvc/jet.png', choices: ['m', 'j', 'n', 'f', 't', 'e']},
    {word: 'jug', imagePath: 'cvc/jug.png', choices: ['n', 'g', 'j', 'a', 'u', 'i']},
    {word: 'kit', imagePath: 'cvc/kit.png', choices: ['o', 'd', 'w', 'k', 'i', 't']},
    {word: 'leg', imagePath: 'cvc/leg.png', choices: ['z', 't', 'e', 'l', 'g', 'b']},
    {word: 'log', imagePath: 'cvc/log.png', choices: ['l', 't', 'q', 'o', 'k', 'g']},
    {word: 'mat', imagePath: 'cvc/mat.png', choices: ['f', 'a', 's', 't', 'm', 'u']},
    {word: 'mop', imagePath: 'cvc/mop.png', choices: ['p', 't', 'k', 'o', 'q', 'm']},
    {word: 'mud', imagePath: 'cvc/mud.png', choices: ['r', 'd', 'e', 'm', 'z', 'u']},
    {word: 'mug', imagePath: 'cvc/mug.png', choices: ['g', 'v', 'm', 'd', 'z', 'u']},
    {word: 'pan', imagePath: 'cvc/pan.png', choices: ['a', 'y', 'd', 'n', 'o', 'p']},
    {word: 'peg', imagePath: 'cvc/peg.png', choices: ['p', 'e', 'q', 'v', 'g', 'j']},
    {word: 'pen', imagePath: 'cvc/pen.png', choices: ['f', 'w', 'e', 'n', 'x', 'p']},
    {word: 'pet', imagePath: 'cvc/pet.png', choices: ['r', 'e', 't', 'd', 'p', 'f']},
    {word: 'pot', imagePath: 'cvc/pot.png', choices: ['q', 't', 'a', 'g', 'o', 'p']},
    {word: 'pug', imagePath: 'cvc/pug.png', choices: ['p', 'j', 'g', 'n', 'w', 'u']},
    {word: 'rat', imagePath: 'cvc/rat.png', choices: ['a', 'e', 'r', 'j', 'b', 't']},
    {word: 'red', imagePath: 'cvc/red.png', choices: ['f', 'q', 'e', 'd', 'a', 'r']},
    {word: 'rip', imagePath: 'cvc/rip.png', choices: ['w', 'k', 'p', 'i', 'r', 's']},
    {word: 'sit', imagePath: 'cvc/sit.png', choices: ['i', 'd', 's', 'j', 'b', 't']},
    {word: 'sun', imagePath: 'cvc/sun.png', choices: ['u', 'd', 'h', 'n', 'v', 's']},
    {word: 'tin', imagePath: 'cvc/tin.png', choices: ['n', 'p', 'i', 't', 'w', 'z']},
    {word: 'van', imagePath: 'cvc/van.png', choices: ['t', 'x', 'n', 'e', 'v', 'a']},

];

const wordsLevel2 = [
    {word: 'band', imagePath: 'blends/band.png', choices: ['b', 'a', 'n', 'd', 'z', 'p']},
    {word: 'belt', imagePath: 'blends/belt.png', choices: ['b', 'e', 'l', 't', 'g', 'x']},
    {word: 'bend', imagePath: 'blends/bend.png', choices: ['e', 'b', 'd', 'n', 'p', 't']},
    {word: 'blob', imagePath: 'blends/blob.png', choices: ['d', 'o', 'l', 'b', 'e', 'p']},
    {word: 'brick', imagePath: 'blends/brick.png', choices: ['c', 'r', 'i', 'b', 'k', 'd']},
    {word: 'camp', imagePath: 'blends/camp.png', choices: ['a', 'm', 'p', 'c', 'd', 'e']},
    {word: 'clam', imagePath: 'blends/clam.png', choices: ['l', 'a', 'c', 'm', 'e', 'p']},
    {word: 'crab', imagePath: 'blends/crab.png', choices: ['a', 'c', 'r', 'b', 'd', 'e']},
    {word: 'desk', imagePath: 'blends/desk.png', choices: ['d', 'e', 's', 'k', 'b', 'a']},
    {word: 'drip', imagePath: 'blends/drip.png', choices: ['p', 'i', 'r', 'd', 'a', 'b']},
    {word: 'drop', imagePath: 'blends/drop.png', choices: ['o', 'r', 'd', 'p', 'a', 'b']},
    {word: 'drum', imagePath: 'blends/drum.png', choices: ['u', 'm', 'r', 'd', 'p', 'a']},
    {word: 'duck', imagePath: 'blends/duck.png', choices: ['d', 'u', 'c', 'k', 'e', 'p']},
    {word: 'flag', imagePath: 'blends/flag.png', choices: ['a', 'l', 'f', 'g', 'e', 'p']},
    {word: 'flip', imagePath: 'blends/flip.png', choices: ['l', 'i', 'f', 'p', 'a', 'b']},
    {word: 'frog', imagePath: 'blends/frog.png', choices: ['o', 'r', 'f', 'g', 'a', 'p']},
    {word: 'gift', imagePath: 'blends/gift.png', choices: ['g', 'i', 'f', 't', 'a', 'd']},
    {word: 'golf', imagePath: 'blends/golf.png', choices: ['o', 'l', 'g', 'f', 'a', 'p']},
    {word: 'hand', imagePath: 'blends/hand.png', choices: ['a', 'n', 'h', 'd', 'e', 'p']},
    {word: 'hunt', imagePath: 'blends/hunt.png', choices: ['h', 'u', 'n', 't', 'a', 'd']},
    {word: 'lamp', imagePath: 'blends/lamp.png', choices: ['a', 'l', 'm', 'p', 'e', 'd']},
    {word: 'mask', imagePath: 'blends/mask.png', choices: ['a', 's', 'm', 'k', 'e', 'p']},
    {word: 'milk', imagePath: 'blends/milk.png', choices: ['i', 'l', 'm', 'k', 'a', 'p']},
    {word: 'nest', imagePath: 'blends/nest.png', choices: ['e', 's', 'n', 't', 'a', 'd']},
    {word: 'pink', imagePath: 'blends/pink.png', choices: ['i', 'n', 'p', 'k', 'a', 'd']},
    {word: 'plug', imagePath: 'blends/plug.png', choices: ['l', 'u', 'p', 'g', 'a', 'b']},
    {word: 'plum', imagePath: 'blends/plum.png', choices: ['l', 'u', 'p', 'm', 'a', 'd']},
    {word: 'pond', imagePath: 'blends/pond.png', choices: ['o', 'n', 'p', 'd', 'a', 'b']},
    {word: 'sled', imagePath: 'blends/sled.png', choices: ['d', 's', 'p', 'e', 'l', 'a']},
    {word: 'slip', imagePath: 'blends/slip.png', choices: ['i', 'd', 'l', 'a', 's', 'p']},
    {word: 'slug', imagePath: 'blends/slug.png', choices: ['g', 'l', 'a', 'u', 'p', 's']},
    {word: 'sock', imagePath: 'blends/sock.png', choices: ['o', 'd', 'k', 's', 'c', 'a']},
    {word: 'spin', imagePath: 'blends/spin.png', choices: ['n', 's', 'a', 'i', 'd', 'p']},
    {word: 'swim', imagePath: 'blends/swim.png', choices: ['m', 'w', 'p', 's', 'a', 'i']},
    {word: 'tent', imagePath: 'blends/tent.png', choices: ['n', 't', 'd', 'e', 't', 'a']},
    {word: 'trap', imagePath: 'blends/trap.png', choices: ['a', 'd', 'r', 'p', 't', 'e']},
    {word: 'twig', imagePath: 'blends/twig.png', choices: ['g', 't', 'i', 'w', 'd', 'a']}    
];

let levelWords = {
    'spellingGameLevel1': [...words],
    'spellingGameLevel2': [...wordsLevel2]
};

// Function to start Level 1
// Create a copy of the original words array to track remaining words.
let currentLevel = '';  // Add this line to track the current level

let remainingWords = [...words];

function startLevel(levelName) {
    currentLevel = levelName;  // Update the current level here
    remainingWords = [...levelWords[levelName]];  // Reset remainingWords based on level

    if (remainingWords.length === 0) {
        // Handle the case when all words are used.
        return;
    }
    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    const selectedWord = remainingWords[randomIndex];

    remainingWords.splice(randomIndex, 1);

    correctWord = selectedWord.word;
    allLetters = selectedWord.choices;

        // Change the background image
        document.getElementById('backgroundImage').src = 'bg3.png';

        // Hide the level selection images
        document.getElementById('levelSelection').style.display = 'none';

        // Hide circular images
        document.querySelector('.circular-images').style.display = 'none';

        // Show the image for the word with a click event to play the word's sound
        document.getElementById('sentence').innerHTML = `<img id="wordImage" src="${selectedWord.imagePath}" alt="${correctWord}" class="small-image" onclick="playWordSound('${correctWord}')" style="cursor: pointer;">`;

        // Add this right after the above line:
        document.getElementById('wordImage').addEventListener('click', () => {
        console.log('Image was clicked');
        });
        // Generate clickable letters
        let choicesHTML = '';
        allLetters.forEach((letter, index) => {
            choicesHTML += `<button class="letter-button stylish-button" id="letter${index}" onclick="selectLetter('${letter}', ${index})">${letter.toUpperCase()}</button>`;
        });
        document.getElementById('choices').innerHTML = choicesHTML;

        // Show a submit button
        document.getElementById('choices').innerHTML += '<button id="submitButton" onclick="checkAnswer()">Submit</button>';

        document.getElementById('menuIcon').style.display = 'block';
        document.getElementById('listenIcon').style.display = 'block';
    }

function selectLetter(letter, index) {
    let audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
    let button = document.getElementById(`letter${index}`);

    if (button.classList.contains('clicked')) {
        // Undo the click
        const position = selectedLetters.indexOf(letter);
        if (position > -1) {
            selectedLetters.splice(position, 1);
        }
        button.classList.remove('clicked');
        button.disabled = false;
        button.style.backgroundColor = '#31079c'; // Force it back to the original color
        button.style.color = 'white';  // This is the line that is preventing the button from being clicked again
    } else {
        // Perform the click operation
        if (selectedLetters.length < correctWord.length) {
            selectedLetters.push(letter);
            button.classList.add('clicked');
            // Comment out the next line or remove it
            // button.disabled = true;  
        }
    }
}
// Array of success audio files
const successAudios = ['goodonya.mp3', 'ulegend.mp3', 'urockstar.mp3', 'welldone.mp3', 'crushingit.mp3'];

// Function to check the answer
function checkAnswer() {
    const answer = selectedLetters.join('');
    if (answer === correctWord) {
        // Play a random success audio
        const randomIndex = Math.floor(Math.random() * successAudios.length);
        const successAudio = new Audio(`sounds/${successAudios[randomIndex]}`);
        successAudio.play();

        // Reset buttons and selections
        resetButtonsAndSelections();

        // Start a new level based on the current level
        startLevel(currentLevel);
    } else {
        const incorrectAudio = new Audio('sounds/nahsorry.mp3');
        incorrectAudio.play();
    }
}

// Reset buttons and selections
function resetButtonsAndSelections() {
    selectedLetters = [];
    allLetters.forEach((_, index) => {
        let button = document.getElementById(`letter${index}`);
        button.disabled = false;
        button.classList.remove('clicked');
        button.style.backgroundColor = '#31079c'; // Force it back to the original color
        button.style.color = 'white'; // Resetting the text color as well
    });
}


function playWordSound(word) {
    let audio = new Audio(`words/${word}.mp3`);
    audio.play();
}

// Function to stop jingle.mp3
function stopMusic() {
    const audio = document.getElementById('homepageJingle');
    audio.pause();
    audio.currentTime = 0;
}

// Function to navigate back to index.html
function goToMenu() {
    window.location.href = 'index.html';
}

// Your existing playWordSound function should work as is.
