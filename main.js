let choicedev = document.getElementById("choice");
let statustext = document.getElementById("statustext");
let player1area = document.getElementById("player1area");
let player2area = document.getElementById("player2area");
let nums = document.getElementById("nums");
let scoresPlayer = document.getElementById("scoresPlayer");
let scoresRobo = document.getElementById("scoresRobo");

let innings = ["batting", "balling"];
let isPlayerBatting = false;
let gameOver = false;

let sum = 0;       // player score
let roboSum = 0;   // robo score
let firstInningsOver = false;

// random choice helper
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ODD
function odd() {
  startToss("odd");
}

// EVEN
function even() {
  startToss("even");
}

// toss function
function startToss(choice) {
  nums.innerHTML = `
    <div onclick="clickedToss('${choice}',1)" class="numbers">1</div>
    <div onclick="clickedToss('${choice}',2)" class="numbers">2</div>
    <div onclick="clickedToss('${choice}',3)" class="numbers">3</div>
    <div onclick="clickedToss('${choice}',4)" class="numbers">4</div>
    <div onclick="clickedToss('${choice}',5')" class="numbers">5</div>
    <div onclick="clickedToss('${choice}',6')" class="numbers">6</div>`;
}

function clickedToss(choice, num) {
  let randomNum = Math.floor(Math.random() * 6) + 1;

  // update hand display
  player1area.querySelector("img").src = `./assets/fin_${num}-removebg-preview.png`;
  player2area.querySelector("img").src = `./assets/fin_${randomNum}-removebg-preview.png`;

  let sumToss = Number(num) + randomNum;
  let playerWinsToss =
    (choice === "odd" && sumToss % 2 !== 0) ||
    (choice === "even" && sumToss % 2 === 0);

  if (playerWinsToss) {
    choicedev.innerHTML = `
      <button onclick="chooseBatting()">Batting</button>
      <button onclick="chooseBowling()">Bowling</button>`;
  } else {
    let roboDecision = randomChoice(innings);
    if (roboDecision === "batting") {
      chooseBowling();
    } else {
      chooseBatting();
    }
  }
}

function chooseBatting() {
  choicedev.innerHTML = "";
  isPlayerBatting = true;
  statustext.innerHTML = `<span>Batting: You</span>`;
  startBatting();
}

function chooseBowling() {
  choicedev.innerHTML = "";
  isPlayerBatting = false;
  statustext.innerHTML = `<span>Batting: Robo</span>`;
  startBatting();
}

// Start batting UI
function startBatting() {
  nums.innerHTML = `
    <div onclick="playBall(1)" class="numbers">1</div>
    <div onclick="playBall(2)" class="numbers">2</div>
    <div onclick="playBall(3)" class="numbers">3</div>
    <div onclick="playBall(4)" class="numbers">4</div>
    <div onclick="playBall(5)" class="numbers">5</div>
    <div onclick="playBall(6)" class="numbers">6</div>`;
}

// Gameplay
function playBall(num) {
  if (gameOver) return;

  let randomNum = Math.floor(Math.random() * 6) + 1;

  // update hands
  player1area.querySelector("img").src = `./assets/fin_${num}-removebg-preview.png`;
  player2area.querySelector("img").src = `./assets/fin_${randomNum}-removebg-preview.png`;

  if (isPlayerBatting) {
    if (num === randomNum) {
      alert("You are OUT!");
      firstInningsOverCheck();
    } else {
      sum += num;
      scoresPlayer.innerHTML = `Score: ${sum}`;
    }
  } else {
    if (num === randomNum) {
      alert("Robo is OUT!");
      firstInningsOverCheck();
    } else {
      roboSum += randomNum;
      scoresRobo.innerHTML = `Score: ${roboSum}`;
    }
  }

  // second innings chase check
  if (firstInningsOver) {
    if (isPlayerBatting && sum > roboSum) endGame("You Win!");
    if (!isPlayerBatting && roboSum > sum) endGame("Robo Wins!");
  }
}

function firstInningsOverCheck() {
  if (!firstInningsOver) {
    firstInningsOver = true;
    isPlayerBatting = !isPlayerBatting;
    statustext.innerHTML = `<span>Batting: ${isPlayerBatting ? "You" : "Robo"}</span>`;
  } else {
    // both innings over
    if (sum > roboSum) endGame("You Win!");
    else if (roboSum > sum) endGame("Robo Wins!");
    else endGame("Match Tied!");
  }
}

function endGame(msg) {
  gameOver = true;
  alert(msg);
  nums.innerHTML = `<button class="retry" onclick="location.reload()">Play Again</button>`;
}
