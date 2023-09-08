// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  if (character === 'steve') {
    catchFish(0.7, 0.2, 0.05, 0.02);
  } else if (character === 'alex') {
    catchFish(0.1, 0.1, 0.3, 0.5);
  }

}

function catchFish(codProb, salmonProb, tropicalProb, pufferProb) {
 let randNum = Math.random();
  if (codProb > randNum) {
    numCod++;
    numCodSpan.innerHTML = numCod;
    resultImg.src = 'img/Raw-Cod.png';
 } else if (salmonProb < randNum) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  resultImg.src = 'img/Raw-Salmon.png';
  } else if (tropicalProb < randNum) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = 'img/Tropical-Fish.png';
  } else if (pufferProb > randNum) {
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = 'img/Pufferfish.png';
  }
}