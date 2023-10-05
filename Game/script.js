let sightWords = ["I", "you", "is", "a", "my"]; // Add more words as needed
let currentWord = "";
let correctCount = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("level1").classList.remove("hidden");
  nextWord();
}

function nextWord() {
    shuffleArray(sightWords);
    currentWord = sightWords[0]; // The correct word
    let audio = new Audio(`${currentWord}.mp3`);
    audio.play();
    
    // Create an options array that includes the correct word and two other unique words
    let options = [currentWord];
    for (let i = 1; i < sightWords.length && options.length < 3; i++) {
      if (sightWords[i] !== currentWord) {
        options.push(sightWords[i]);
      }
    }
    
    // Shuffle the options
    options = shuffleArray(options);
  
  // Set the options
  for (let i = 0; i < options.length; i++) {
    let imgElement = document.getElementById(`option${i + 1}`);
    imgElement.src = `${options[i]}.png`;
    imgElement.alt = options[i];
    imgElement.onclick = () => checkAnswer(options[i]);
  }
}


function checkAnswer(word) {
    if (word === currentWord) {
      correctCount++;
  
      // Play the kooka.mp3 sound when the correct answer is selected
      let kookaSound = new Audio("kooka.mp3");
      kookaSound.play();
  
      if (correctCount >= 10) {
        // Hide the current game level
        document.getElementById("level1").classList.add("hidden");
  
        // Create an image element and set its attributes
        let successImage = document.createElement("img");
        successImage.src = "success.jpeg";  // Make sure this path is correct
        successImage.id = "successImage";
  
        // Add CSS styles to make sure the image fits within the viewport
        successImage.style.width = "100%";
        successImage.style.height = "100vh";
        successImage.style.objectFit = "contain";
        successImage.style.position = "absolute";
        successImage.style.top = "50%";
        successImage.style.left = "50%";
        successImage.style.transform = "translate(-50%, -50%)";
  
        // Remove all elements from the body
        document.body.innerHTML = '';
  
        // Append the image element to the body
        document.body.appendChild(successImage);
      } else {
        // Introduce a delay of 2 seconds (2000 milliseconds)
        setTimeout(() => {
          nextWord();  // Load the next word
        }, 2000);
      }
    } else {
      alert("Try again!");
      // Introduce a delay of 2 seconds (2000 milliseconds)
      setTimeout(() => {
        nextWord();  // Load a new word anyway
      }, 2000);
    }
  }
    
function playWord() {
  let audio = new Audio(`${currentWord}.mp3`);
  audio.play();
}
