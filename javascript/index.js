import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();
console.log(chronometer)

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
printMinutes();
printSeconds();
}

function printMinutes() {

  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}




// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}




function printSplit() {
  splits.innerHTML += `<li> ${chronometer.splitClick()} </li>`; 
}

function clearSplits() {
  splits.innerHTML = " ";
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop";
  chronometer.stopClick;
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.className = "btn split";
  chronometer.splitClick;
}

function setStartBtn() {
btnLeft.textContent = "START";
btnLeft.className = "btn start";
chronometer.startClick;
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
  chronometer.resetClick;
}

// Start/Stop Button

btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    btnRight.textContent = "SPLIT";
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split";
    btnLeft.className = "btn stop";
    chronometer.startClick();
  } else {
    btnRight.textContent = "RESET";
    btnRight.className = "btn reset";
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    chronometer.stopClick();
  }
});


// Reset/Split Button
