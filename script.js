const buttonStart = document.querySelector(".start");
buttonReset = document.querySelector(".reset");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const microSeconds = document.querySelector(".microsecunds");
const clock = document.querySelector(".clock");
const microClock = document.querySelector(".microClock");
const microLine = document.querySelector(".microLine");
const sec = document.querySelector(".sec");

let minute, second, microSecond, startMethod, myInterval;

function reset() {
  minute = 0;
  second = 0;
  microSecond = 0;
  startMethod = true;
  minutes.textContent = `0${minute}`;
  seconds.textContent = `0${second}`;
  microSeconds.textContent = `0${microSecond}`;
  sec.style.transform = `rotateZ(0deg)`;
  microLine.style.transform = `rotateZ(0deg)`;
}
function createDiv() {
  for (let i = 0; i < 60; i++) {
    newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="minuteTable" style="transform: rotate(${
      i * 6
    }deg)">
    <div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div>
  </div>`;
    clock.appendChild(newDiv);
  }
  for (let i = 0; i < 10; i++) {
    newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="minuteTable" style="transform: rotate(${
      i * 36
    }deg)">
    <div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div>
  </div>`;
    microClock.appendChild(newDiv);
  }
}
function convert(string) {
  return String(string);
}
function start() {
  myInterval = setInterval(function () {
    microSecond++;

    if (microSecond === 100) {
      microSecond = 0;
      second++;
      sec.style.transform = `rotateZ(${(360 / 60) * second}deg)`;
    }
    if (second === 60) {
      minute++;
      second = 0;
      microSecond = 0;
    }
    microLine.style.transform = `rotateZ(${(360 / 100) * microSecond}deg)`;
    minutes.textContent = convert(minute).padStart(2, 0);
    seconds.textContent = convert(second).padStart(2, 0);
    microSeconds.textContent = convert(microSecond).padStart(2, 0);
  }, 10);
}

buttonStart.addEventListener("click", function () {
  if (startMethod) {
    startMethod = !startMethod;
    start();
  } else {
    startMethod = !startMethod;
    clearInterval(myInterval);
  }
});
buttonReset.addEventListener("click", function () {
  clearInterval(myInterval);
  reset();
});
createDiv();
reset();
