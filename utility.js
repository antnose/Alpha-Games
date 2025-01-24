// Hide Element By ID
function hideElementByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// Show Second Page Element By ID
function showElementById(elementId) {
  const elementTwo = document.getElementById(elementId);
  elementTwo.classList.remove("hidden");
}

function setBgColorById(elementId) {
  const btnSelect = document.getElementById(elementId);
  btnSelect.classList.add("bg-orange-400");
  btnSelect.classList.add("text-black");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const index = Math.round(Math.random() * 25);
  let alphabet = alphabets[index];
  return alphabet;
}

// I try this and this is not working

// let score = 0;
// let life = 5;
// function calculate(elementId) {
//   const keyboard = elementId.addEventListner("keyup");
//   if (elementId === keyboard) {
//     score++;
//     document.querySelector("#score").innerText = score;
//   } else {
//     life--;
//     document.querySelector("#life").innerText = life;
//   }
// }

// function getARandomAlphabet() {
//   // get or create alphabet array
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");

//   // Get a random index between 0 - 25
//   const randomNum = Math.round(Math.random() * 25);

//   const alphabet = alphabets[randomNum];

//   return alphabet;
// }

// 12:25
