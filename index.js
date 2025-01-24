// const homeSec = document.querySelector("#home");
// const playGround = document.querySelector("#playGround");
// document.querySelector("#homeBtn").addEventListener("click", () => {
//   homeSec.setAttribute("class", "hidden");
//   // playGround.removeAttribute("class", "hidden");
//   // document.querySelector("#playGround").removeAttribute("class", "hidden");
//   homeSec.classList.add("hidden");
//   playGround.classList.remove("hidden");
//   pl;
// });

function handleKeyboardButtonPress(event) {
  // -------> first Time <-------
  // const playerPressed = event.key;
  // console.log("Player Pressed", playerPressed);
  // // get the expected to press
  // const currentAlphabetElement = document.getElementById("display");
  // const currentAlphabet = currentAlphabetElement.innerText;
  // const expectedAlphabet = currentAlphabet.toLowerCase();
  // // check matched or not
  // if (playerPressed === expectedAlphabet) {
  //   console.log("You got a point");
  // } else {
  //   console.log("You lost a life");
  // }
  // -------> Second Time <-------

  const playerPressed = event.key.toLowerCase();

  // key player is expected to press
  const currentAlphabetElement = document.getElementById("display");
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

  // check right or wrong key pressed

  if (playerPressed === currentAlphabet) {
    // update score:
    // 1. get the curret score
    // 2. increase the score by 1
    // 3. show the updated score
    let currentScorElement = document.getElementById("score");
    const currentScoreText = currentScorElement.innerText;
    const currentScore = Number(currentScoreText);
    let newScore = currentScore + 1;
    currentScorElement.innerText = newScore;
    continueGame();
    document.querySelector("#finalScore").innerText = newScore;
    removeBackgroundColorById(playerPressed);
  } else {
    // step 1 : get the current life number
    const currentLifeElement = document.getElementById("life");
    const currentlifeText = currentLifeElement.innerText;
    console.log(currentlifeText);
    const currentLife = currentlifeText;
    console.log(currentLife);
    // step 2 : reduce the life count
    const newLife = currentLife - 1;
    // step 3 : display the life status
    currentLifeElement.innerText = newLife;
    if (newLife <= 0) {
      hideElementByID("playGround");
      showElementById("finalResult");
    }
  }
}

document.addEventListener("keyup", (event) => {
  handleKeyboardButtonPress(event);
});

function continueGame() {
  // step - 1 : generate a random alphabet
  const alphabet = getARandomAlphabet();

  // show the random alphabet
  const currentAlphabetElement = document.querySelector("#display");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBgColorById(alphabet);

  // This method i create just for my practice and it's not working
  // calculate(alphabet);
}

document.querySelector("#homeBtn").addEventListener("click", function play() {
  hideElementByID("home");
  showElementById("playGround");
  continueGame();
  // document.querySelector("#display").innerText = continueGame();
});

document.querySelector("#playAgain").addEventListener("click", () => {
  hideElementByID("playGround");
  showElementById("home");
});

// complete
