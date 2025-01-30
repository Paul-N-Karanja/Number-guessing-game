"use strict";

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const scoreValue = function (score) {
  document.querySelector(".score").textContent = score;
};

const bodyColorGradient = function (gradient) {
  document.querySelector("body").style.background = gradient;
};

const numberValue = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (guessValue == correctNumber) {
      //if the guessed value is correct
      displayMessage(`That's my number🏆`);

      bodyColorGradient(`linear-gradient(#3363ff,#60b347)`);
      document.querySelector(".number").style.width = "30rem";
      numberValue(`${correctNumber}`);

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else if (guessValue != correctNumber) {
      //if the guessed value is either lesser  or greater
      displayMessage(
        `${
          guessValue > correctNumber
            ? `📈${guessValue} is higher than my number. Try again🔁`
            : `📉${guessValue} is lower than my number. Try again🔁`
        }`
      );

      score--;
      scoreValue(`${score}`);
      bodyColorGradient(`linear-gradient(#3363ff,#f72828)`);
    } else if (!guessValue) {
      //if the guessed value is empty
      displayMessage(`You cannot leave the input empty. Try again🔁`);
      score--;
      scoreValue(`${score}`);

      bodyColorGradient(`linear-gradient(#3363ff,#f728e9)`);
    }
  } else {
    displayMessage(`😮You have lost the game. Reload and try again`);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  numberValue("?");
  displayMessage(`Start guessing...`);
  scoreValue(`${score}`);
  bodyColorGradient(`linear-gradient(#3363ff, #d8d8d8)`);
  document.querySelector(".number").style.width = "15rem";
});
