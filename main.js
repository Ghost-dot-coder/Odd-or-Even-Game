choicedev = document.getElementById("choice");

function randomChoice(innings) {
  const randomIndex = Math.floor(Math.random() * innings.length);
  return innings[randomIndex];
}
var innings = ["batting", "balling"];

// ODD
function odd() {
  nums.innerHTML = `
            <div onclick="clickedNum('1')" class="numbers">1</div>
            <div onclick="clickedNum('2')" class="numbers">2</div>
            <div onclick="clickedNum('3')" class="numbers">3</div>
            <div onclick="clickedNum('4')" class="numbers">4</div>
            <div onclick="clickedNum('5')" class="numbers">5</div>
            <div onclick="clickedNum('6')" class="numbers">6</div>`;
  window.clickedNum = function (num) {
    // hand part
    player1area.innerHTML = `<h3>You</h3>
          <p id="scores">Score: 0</p>
          <img class="fin" src="./assets/fin_${num}-removebg-preview.png" alt="" />
          <div id="nums">
            <div onclick="clicked('1')" class="numbers">1</div>
            <div onclick="clicked('2')" class="numbers">2</div>
            <div onclick="clicked('3')" class="numbers">3</div>
            <div onclick="clicked('4')" class="numbers">4</div>
            <div onclick="clicked('5')" class="numbers">5</div>
            <div onclick="clicked('6')" class="numbers">6</div>
          </div>`;

    var randomNum = Math.floor(Math.random() * 6) + 1;
    player2area.innerHTML = `<h3>Robo</h3>
          <p>Score: 0</p>
          <img class="fin" src="./assets/fin_${randomNum}-removebg-preview.png" alt="" />
          <div class="status">
            <div id="choice"></div>
            <h4 id="statustext"></h4>
          </div>`;
    score = 0;
    if ((Number(num) + randomNum) % 2 != 0) {
      choice.innerHTML = `
            <button type="button" onclick="Batting()">Batting</button>
            <button type="button" onclick="Balling()">Balling</button>`;
      window.Batting = () => {
        choicedev.style.display = "none";
        statustext.innerHTML = `<span>Batting: You</span>`;
        score += Number(num);
        scores.innerHTML = `${score}`;
      };
      window.Balling = () => {
        choicedev.style.display = "none";
        statustext.innerHTML = `<span>Batting: Robo</span>`;
      };
    } else {
      statustext.innerHTML = `<span>Batting: ${
        randomChoice(innings) == "batting" ? "Robo" : "You"
      }</span>`;
    }
  };
}

// Even
function even() {
  nums.innerHTML = `
            <div onclick="clickedNum('1')" class="numbers">1</div>
            <div onclick="clickedNum('2')" class="numbers">2</div>
            <div onclick="clickedNum('3')" class="numbers">3</div>
            <div onclick="clickedNum('4')" class="numbers">4</div>
            <div onclick="clickedNum('5')" class="numbers">5</div>
            <div onclick="clickedNum('6')" class="numbers">6</div>`;
  window.clickedNum = function (num) {
    var randomNum = Math.floor(Math.random() * 6) + 1;
    score = 0;
    if ((num + randomNum) % 2 == 0) {
      choice.innerHTML = `
            <button type="button" onclick="Batting()">Batting</button>
            <button type="button" onclick="Balling()">Balling</button>`;
      window.Batting = () => {
        choicedev.style.display = "none";
        statustext.innerHTML = `<span>Batting: You</span>`;
        score += num;
        scores.innerHTML = `${score}`;
      };
      window.Balling = () => {
        choicedev.style.display = "none";
        statustext.innerHTML = `<span>Batting: Robo</span>`;
      };
    } else {
      statustext.innerHTML = `<span>Batting: ${
        randomChoice(innings) == "batting" ? "Robo" : "You"
      }</span>`;
    }
  };
}
