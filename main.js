var randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

function odd() {
  nums.innerHTML = `
            <div onclick="clickedNum('1')" class="numbers">1</div>
            <div onclick="clickedNum('2')" class="numbers">2</div>
            <div onclick="clickedNum('3')" class="numbers">3</div>
            <div onclick="clickedNum('4')" class="numbers">4</div>
            <div onclick="clickedNum('5')" class="numbers">5</div>
            <div onclick="clickedNum('6')" class="numbers">6</div>`;
  window.clickedNum = function(num) {
    console.log("You clicked:", num);
  }
}
function even() {
  nums.innerHTML = `
            <div onclick="clickedNum('1')" class="numbers">1</div>
            <div onclick="clickedNum('2')" class="numbers">2</div>
            <div onclick="clickedNum('3')" class="numbers">3</div>
            <div onclick="clickedNum('4')" class="numbers">4</div>
            <div onclick="clickedNum('5')" class="numbers">5</div>
            <div onclick="clickedNum('6')" class="numbers">6</div>`;
}
