let selectedLetters = [];
let correctWord = ''; // Initialize as empty string
let allLetters = []; // Initialize as empty array

const words = [
{word: 'cat', imagePath: 'cvc/cat.png', choices: ['c', 'a', 't', 'p', 'n', 'e',]},
{word: 'bed', imagePath: 'cvc/bed.png', choices: ['c', 'u', 'b', 'a', 'd', 'e',]},
{word: 'bin', imagePath: 'cvc/bin.png', choices: ['b', 'o', 'j', 'f', 'n', 'i',]},
{word: 'box', imagePath: 'cvc/box.png', choices: ['j', 'z', 'x', 'a', 'o', 'b',]},
{word: 'bug', imagePath: 'cvc/bug.png', choices: ['g', 't', 'u', 'b', 'z', 'm',]},
{word: 'cot', imagePath: 'cvc/cot.png', choices: ['i', 't', 'c', 'a', 'o', 'r',]},
{word: 'cub', imagePath: 'cvc/cub.png', choices: ['m', 'i', 'b', 'u', 'c', 'g',]},
{word: 'dog', imagePath: 'cvc/dog.png', choices: ['k', 'b', 'o', 'i', 'g', 'd',]},
{word: 'fin', imagePath: 'cvc/fin.png', choices: ['i', 'x', 'c', 'n', 'f', 'g',]},
{word: 'hen', imagePath: 'cvc/hen.png', choices: ['n', 'p', 'w', 'h', 'r', 'e',]},
{word: 'hop', imagePath: 'cvc/hop.png', choices: ['y', 'h', 'g', 'o', 'j', 'p',]},
{word: 'hut', imagePath: 'cvc/hut.png', choices: ['h', 'p', 'u', 'o', 'e', 't',]},
{word: 'jam', imagePath: 'cvc/jam.png', choices: ['d', 'j', 'a', 'c', 'm', 'b',]},
{word: 'jet', imagePath: 'cvc/jet.png', choices: ['m', 'j', 'n', 'f', 't', 'e',]},
{word: 'jug', imagePath: 'cvc/jug.png', choices: ['n', 'g', 'j', 'a', 'u', 'i',]},
{word: 'kit', imagePath: 'cvc/kit.png', choices: ['o', 'd', 'w', 'k', 'i', 't',]},
{word: 'leg', imagePath: 'cvc/leg.png', choices: ['z', 't', 'e', 'l', 'g', 'b',]},
{word: 'log', imagePath: 'cvc/log.png', choices: ['l', 't', 'q', 'o', 'k', 'g',]},
{word: 'mat', imagePath: 'cvc/mat.png', choices: ['f', 'a', 's', 't', 'm', 'u',]},
{word: 'mop', imagePath: 'cvc/mop.png', choices: ['p', 't', 'k', 'o', 'q', 'm',]},
{word: 'mud', imagePath: 'cvc/mud.png', choices: ['r', 'd', 'e', 'm', 'z', 'u',]},
{word: 'mug', imagePath: 'cvc/mug.png', choices: ['g', 'v', 'm', 'd', 'z', 'u',]},
{word: 'pan', imagePath: 'cvc/pan.png', choices: ['a', 'y', 'd', 'n', 'o', 'p',]},
{word: 'peg', imagePath: 'cvc/peg.png', choices: ['p', 'e', 'q', 'v', 'g', 'j',]},
{word: 'pen', imagePath: 'cvc/pen.png', choices: ['f', 'w', 'e', 'n', 'x', 'p',]},
{word: 'pet', imagePath: 'cvc/pet.png', choices: ['r', 'e', 't', 'd', 'p', 'f',]},
{word: 'pot', imagePath: 'cvc/pot.png', choices: ['q', 't', 'a', 'g', 'o', 'p',]},
{word: 'pug', imagePath: 'cvc/pug.png', choices: ['p', 'j', 'g', 'n', 'w', 'u',]},
{word: 'rat', imagePath: 'cvc/rat.png', choices: ['a', 'e', 'r', 'j', 'b', 't',]},
{word: 'red', imagePath: 'cvc/red.png', choices: ['f', 'q', 'e', 'd', 'a', 'r',]},
{word: 'rip', imagePath: 'cvc/rip.png', choices: ['w', 'k', 'p', 'i', 'r', 's',]},
{word: 'sit', imagePath: 'cvc/sit.png', choices: ['i', 'd', 's', 'j', 'b', 't']},
{word: 'sun', imagePath: 'cvc/sun.png', choices: ['u', 'd', 'h', 'n', 'v', 's']},
{word: 'tin', imagePath: 'cvc/tin.png', choices: ['n', 'p', 'i', 't', 'w', 'z']},
{word: 'van', imagePath: 'cvc/van.png', choices: ['t', 'x', 'n', 'e', 'v', 'a']},

];

const wordsLevel2 = [
{word: 'band', imagePath: 'blends/band.png', choices: ['b', 'a', 'n', 'd', 'z', 'p', 'v']},
{word: 'belt', imagePath: 'blends/belt.png', choices: ['b', 'e', 'l', 't', 'g', 'x', 'd']},
{word: 'bend', imagePath: 'blends/bend.png', choices: ['e', 'b', 'd', 'n', 'p', 't', 'i']},
{word: 'blob', imagePath: 'blends/blob.png', choices: ['d', 'o', 'l', 'b', 'e', 'p', 'b']},
{word: 'camp', imagePath: 'blends/camp.png', choices: ['a', 'm', 'p', 'c', 'd', 'e', 'n']},
{word: 'clam', imagePath: 'blends/clam.png', choices: ['l', 'a', 'c', 'm', 'e', 'p', 'd']},
{word: 'crab', imagePath: 'blends/crab.png', choices: ['a', 'c', 'r', 'b', 'd', 'e', 'p']},
{word: 'desk', imagePath: 'blends/desk.png', choices: ['d', 'e', 's', 'k', 'b', 'a', 'p']},
{word: 'drip', imagePath: 'blends/drip.png', choices: ['p', 'i', 'r', 'd', 'a', 'b', 'e']},
{word: 'drop', imagePath: 'blends/drop.png', choices: ['o', 'r', 'd', 'p', 'a', 'b', 'l']},
{word: 'drum', imagePath: 'blends/drum.png', choices: ['u', 'm', 'r', 'd', 'p', 'a', 'e']},
{word: 'flag', imagePath: 'blends/flag.png', choices: ['a', 'l', 'f', 'g', 'e', 'p', 'j']},
{word: 'flip', imagePath: 'blends/flip.png', choices: ['l', 'i', 'f', 'p', 'a', 'b', 'd']},
{word: 'frog', imagePath: 'blends/frog.png', choices: ['o', 'r', 'f', 'g', 'a', 'p', 'm']},
{word: 'gift', imagePath: 'blends/gift.png', choices: ['g', 'i', 'f', 't', 'a', 'd', 'e']},
{word: 'golf', imagePath: 'blends/golf.png', choices: ['o', 'l', 'g', 'f', 'a', 'p', 'j']},
{word: 'hand', imagePath: 'blends/hand.png', choices: ['a', 'n', 'h', 'd', 'e', 'p', 'b']},
{word: 'hunt', imagePath: 'blends/hunt.png', choices: ['h', 'u', 'n', 't', 'a', 'd', 'i']},
{word: 'lamp', imagePath: 'blends/lamp.png', choices: ['a', 'l', 'm', 'p', 'e', 'd', 'o']},
{word: 'mask', imagePath: 'blends/mask.png', choices: ['a', 's', 'm', 'k', 'e', 'p', 'b']},
{word: 'milk', imagePath: 'blends/milk.png', choices: ['i', 'l', 'm', 'k', 'a', 'p', 'e']},
{word: 'nest', imagePath: 'blends/nest.png', choices: ['e', 's', 'n', 't', 'a', 'd', 'i']},
{word: 'pink', imagePath: 'blends/pink.png', choices: ['i', 'n', 'p', 'k', 'a', 'd', 'u']},
{word: 'plug', imagePath: 'blends/plug.png', choices: ['l', 'u', 'p', 'g', 'a', 'b', 'e']},
{word: 'plum', imagePath: 'blends/plum.png', choices: ['l', 'u', 'p', 'm', 'a', 'd', 'n']},
{word: 'pond', imagePath: 'blends/pond.png', choices: ['o', 'n', 'p', 'd', 'a', 'b', 'm']},
{word: 'sled', imagePath: 'blends/sled.png', choices: ['d', 's', 'p', 'e', 'l', 'a', 'b']},
{word: 'slip', imagePath: 'blends/slip.png', choices: ['i', 'd', 'l', 'a', 's', 'p', 'b']},
{word: 'slug', imagePath: 'blends/slug.png', choices: ['g', 'l', 'a', 'u', 'p', 's', 'r']},
{word: 'spin', imagePath: 'blends/spin.png', choices: ['n', 's', 'a', 'i', 'd', 'p', 'm']},
{word: 'swim', imagePath: 'blends/swim.png', choices: ['m', 'w', 'p', 's', 'a', 'i', 'n']},
{word: 'tent', imagePath: 'blends/tent.png', choices: ['n', 't', 'd', 'e', 't', 'a', 'i']},
{word: 'trap', imagePath: 'blends/trap.png', choices: ['a', 'd', 'r', 'p', 't', 'e', 'i']},
{word: 'twig', imagePath: 'blends/twig.png', choices: ['g', 't', 'i', 'w', 'd', 'a', 'j']}
];

const wordsLevel3 = [
    {word: 'king', imagePath: 'complex/king.png', choices: ['i', 'e', 'm', 'k', 'ng', 's']},
    {word: 'sing', imagePath: 'complex/sing.png', choices: ['i', 'e', 'w', 'k', 'ng', 's']},
    {word: 'wing', imagePath: 'complex/wing.png', choices: ['i', 'o', 'ng', 'w', 't', 's']},
    {word: 'string', imagePath: 'complex/string.png', choices: ['i', 't', 'm', 'r', 'ng', 's']},
    {word: 'swing', imagePath: 'complex/swing.png', choices: ['i', 'u', 'w', 'l', 'ng', 's']},
    {word: 'ring', imagePath: 'complex/ring.png', choices: ['i', 'r', 'j', 'p', 'ng', 's']},
    {word: 'chimp', imagePath: 'complex/chimp.png', choices: ['i', 'ch', 'j', 'p', 'm', 'e']},
    {word: 'bench', imagePath: 'complex/bench.png', choices: ['i', 'b', 'n', 'e', 'ng', 'ch']},
    {word: 'chop', imagePath: 'complex/chop.png', choices: ['ch', 'o', 'u', 'p', 'ng', 'sh']},
    {word: 'check', imagePath: 'complex/check.png', choices: ['i', 'ch', 'e', 'p', 'ng', 'ck']},
    {word: 'chick', imagePath: 'complex/chick.png', choices: ['i', 'ch', 'e', 'ck', 'ng', 's']},
    {word: 'fish', imagePath: 'complex/fish.png', choices: ['i', 'sh', 'j', 'f', 'm', 'e']},
    {word: 'shed', imagePath: 'complex/shed.png', choices: ['i', 'b', 'd', 'e', 'ng', 'sh']},
    {word: 'dish', imagePath: 'complex/dish.png', choices: ['ch', 'd', 'u', 'p', 'i', 'sh']},
    {word: 'brush', imagePath: 'complex/brush.png', choices: ['r', 'ch', 'e', 'b', 'sh', 'u']},
    {word: 'ship', imagePath: 'complex/ship.png', choices: ['i', 'ch', 'e', 'sh', 'd', 'p']},
    {word: 'crash', imagePath: 'complex/crash.png', choices: ['c', 'ch', 'r', 'sh', 'a', 'p']},
    {word: 'bath', imagePath: 'complex/bath.png', choices: ['b', 'a', 'u', 'p', 'i', 'th']},
    {word: 'sloth', imagePath: 'complex/sloth.png', choices: ['s', 'th', 'o', 'l', 'f', 'u']},
    {word: 'moth', imagePath: 'complex/moth.png', choices: ['i', 'm', 'o', 'th', 'n', 'p']},
    {word: 'path', imagePath: 'complex/path.png', choices: ['p', 'th', 'f', 'sh', 'a', 'p']},
    {word: 'seal', imagePath: 'complex/seal.png', choices: ['i', 'sh', 'ea', 'f', 's', 'l']},
    {word: 'beach', imagePath: 'complex/beach.png', choices: ['ea', 'b', 'ch', 'i', 'ng', 'sh']},
    {word: 'peach', imagePath: 'complex/peach.png', choices: ['ch', 'd', 'ea', 'p', 'i', 'sh']},
    {word: 'sheep', imagePath: 'complex/sheep.png', choices: ['p', 'ch', 'ee', 'b', 'sh', 'u']},
    {word: 'bee', imagePath: 'complex/bee.png', choices: ['b', 'ch', 'ee', 'sh', 'd', 'p']},
    {word: 'sleep', imagePath: 'complex/sleep.png', choices: ['s', 'l', 'i', 'sh', 'ee', 'p']},
    {word: 'tree', imagePath: 'complex/tree.png', choices: ['c', 'ee', 'r', 'p', 't', 'n']},
    {word: 'spray', imagePath: 'complex/spray.png', choices: ['s', 'th', 'r', 'p', 'ay', 'u']},
    {word: 'tray', imagePath: 'complex/tray.png', choices: ['i', 't', 'e', 'th', 'r', 'ay']},
    {word: 'tail', imagePath: 'complex/tail.png', choices: ['e', 'l', 'f', 'm', 'ai', 't']},
    {word: 'sail', imagePath: 'complex/sail.png', choices: ['e', 's', 'l', 'ai', 'n', 'p']},
    {word: 'mail', imagePath: 'complex/mail.png', choices: ['l', 'n', 'm', 'p', 'e', 'ai']},
    {word: 'rain', imagePath: 'complex/rain.png', choices: ['c', 'ai', 'r', 'p', 'o', 'n']},
    {word: 'brain', imagePath: 'complex/brain.png', choices: ['n', 'b', 'r', 'p', 'ai', 'u']},
    {word: 'train', imagePath: 'complex/train.png', choices: ['i', 'n', 'e', 't', 'r', 'ai']},
    {word: 'snail', imagePath: 'complex/snail.png', choices: ['e', 's', 'l', 'n', 'ai', 'p']},
    {word: 'night', imagePath: 'complex/night.png', choices: ['e', 'i', 'igh', 'n', 'ai', 't']},
    {word: 'fight', imagePath: 'complex/fight.png', choices: ['t', 'f', 'l', 'n', 'ai', 'igh']},
    {word: 'tie', imagePath: 'complex/tie.png', choices: ['e', 't', 'ie', 'n', 'ai', 'p']},
    {word: 'pie', imagePath: 'complex/pie.png', choices: ['e', 's', 'l', 'ie', 'ai', 'p']},


    // Add more words here...
  ];

  

  let levelWords = {
    'spellingGameLevel1': [...words],
    'spellingGameLevel2': [...wordsLevel2],
    'spellingGameLevel3': [...wordsLevel3]  // Add this line
  };

// Function to start Level 1
// Create a copy of the original words array to track remaining words.
let currentLevel = '';  // Add this line to track the current level
let remainingWords = [];

// Shuffle the words at the start of the level
function startLevel(levelName) {
  currentLevel = levelName;
  // Shuffle the array of words for the current level
  remainingWords = shuffle([...levelWords[levelName]]);
  nextWord();
}

// Pick the next word from the remaining words without repeating
function nextWord() {
  if (remainingWords.length === 0) {
    // Level is complete
    console.log("Level finished!");
    
    // Display a level completion message
    document.getElementById('sentence').innerHTML = `<div class="completion-message"></div>`;
    
    // Show options for the player
    document.getElementById('choices').innerHTML = `
      <img id="replayButton" src="playagain.png" alt="Replay" onclick="startLevel(currentLevel)" class="action-button" />
      <img id="mainMenuButton" src="menu.png" alt="Main Menu" onclick="goToMenu()" class="action-button" />
    `;

    // Disable the submit button to prevent further submissions
    document.getElementById('submitButton').disabled = true;

    // Optionally, play a completion sound or jingle
    const completionAudio = new Audio('words/completion.mp3');
    completionAudio.play();

    // Stop any other gameplay logic that may be pending
    return;
  }

  // Take the next word from the shuffled list instead of a random one
  const selectedWord = remainingWords.pop();

  correctWord = selectedWord.word;
  allLetters = selectedWord.choices;

// Change the background image
document.getElementById('backgroundImage').src = 'bg4.png';

// Hide the level selection images
document.getElementById('levelSelection').style.display = 'none';


// Show the image for the word with a click event to play the word's sound
document.getElementById('sentence').innerHTML = `<img id="wordImage" src="${selectedWord.imagePath}" alt="${correctWord}" class="small-image" onclick="playWordSound('${correctWord}')" style="cursor: pointer;">`;

// Add this right after the above line:
document.getElementById('wordImage').addEventListener('click', () => {
console.log('Image was clicked');
});


 // Add this line to show the Music Off button when a new level starts
 document.getElementById('musicOffImg').style.display = 'block';

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

// Allow letters to be deselected before submitting the answer
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
    button.style.backgroundColor = '#31079c'; // Revert to the original color
    button.style.color = 'white';
  } else {
    // Perform the click operation
    if (selectedLetters.length < correctWord.length) {
      selectedLetters.push(letter);
      button.classList.add('clicked');
    }
  }
}
// Array of success audio files
const successAudios = ['goodonya.mp3', 'ulegend.mp3', 'urockstar.mp3', 'welldone.mp3', 'crushingit.mp3'];

// Function to check the answer
function checkAnswer() {
  const answer = selectedLetters.join('');
  if (answer === correctWord) {
    console.log("Correct word detected. Current score before increment: " + score);
    score++;
    document.getElementById("score").textContent = score;
    
    const randomIndex = Math.floor(Math.random() * successAudios.length);
    const successAudio = new Audio(`sounds/${successAudios[randomIndex]}`);
    successAudio.play();
    // Reset buttons and selections
    resetButtonsAndSelections();

    // Proceed to the next word
    nextWord();  // This is the corrected line
  } else {
    // Incorrect answer logic
    const incorrectAudio = new Audio('sounds/nahsorry.mp3');
    incorrectAudio.play();
  
    // Reset buttons and selections to allow retrying the same word
    resetButtonsAndSelections();
    // Do not call startLevel to avoid moving to the next word
  }
}

// Reset buttons and selections
function resetButtonsAndSelections() {
  selectedLetters = [];
  allLetters.forEach((_, index) => {
    let button = document.getElementById(`letter${index}`);
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


// Stop the music when the "musicOffImg" is clicked
function bindMusicOffEvent() {
  document.getElementById('musicOffImg').addEventListener('click', function() {
    const audio = document.getElementById('homepageJingle');
    audio.pause();
  });
}

// Bind the music off event after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', bindMusicOffEvent);

let wordsPlayed = new Set(); // To keep track of words played in the current level

// Function to shuffle words array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

