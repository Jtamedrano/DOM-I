const body = document.querySelector("body");
body.style.flexDirection = "column";

// Time Variables
let mHun = 0;
let mTen = 0;
let sOne = 0;
let sTen = 0;

/**
 * Select ids
 */
const secTens = document.querySelector("#secondTens");
const secOnes = document.querySelector("#secondOnes");
const msHunds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

//Creates Button to start counter
const startBtnDiv = document.createElement("div");
startBtnDiv.classList.add("btn-row");
body.prepend(startBtnDiv);

const startBtn = document.createElement("button");
startBtn.textContent = "Start";
startBtn.classList.toggle("startBtn");
startBtn.onclick = () => startTimer();
startBtnDiv.prepend(startBtn);

startBtn.style.padding = "0.5em 1em";
startBtn.style.border = "1px solid #999";
startBtn.style.borderRadius = "5px";
startBtn.style.fontSize = "4vw";

function start() {
  msTens.textContent = mTen;
  msHunds.textContent = mHun;
  secOnes.textContent = sOne;
  secTens.textContent = sTen;

  mTen++;
  if (mTen === 10) {
    mTen = 0;
    mHun++;
  }
  if (mHun === 10) {
    mHun = 0;
    sOne++;
  }
  if (sOne >= 10) {
    sOne = 0;
    sTen++;
  }
  if (sTen === 1) {
    msTens.textContent = mTen;
    msHunds.textContent = mHun;
    secOnes.textContent = sOne;
    secTens.textContent = sTen;
    window.clearInterval(clock);
    startBtn.textContent = "Restart";
    startBtn.onclick = () => {
      mHun = 0;
      mTen = 0;
      sOne = 0;
      sTen = 0;
      startTimer();
    };
  }
}

let clock;

function startTimer() {
  function stopTimer() {
    window.clearInterval(clock);
    startBtn.textContent = "Start";
    startBtn.onclick = () => startTimer();
  }
  clock = window.setInterval(start, 10);
  startBtn.innerText = "Stop";
  startBtn.onclick = () => {
    stopTimer();
  };
}
