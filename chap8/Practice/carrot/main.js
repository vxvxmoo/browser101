const btnPlay = document.querySelector(".button__play");
const btnStart = document.querySelector(".btn-start");
const boardTimer = document.querySelector(".board__timer");
const boardScore = document.querySelector(".board__score");

let timer;
let sec = 10;

btnPlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-start")) {
    btnStart.classList.replace("fa-play", "fa-stop");
    btnStart.classList.replace("btn-start", "btn-stop");
  } else {
    btnStop.classList.replace("fa-play", "fa-stop");
    btnStop.classList.replace("btn-start", "btn-stop");
  }
  boardTimer.innerText = `00:${sec}`;
  timer = setInterval(counterTimer, 1000);
});

function counterTimer() {
  if (sec == 0) {
    clearInterval(timer);
    boardTimer.innerText = "00:00";
    return;
  }
  sec--;
  boardTimer.innerText = `00:0${sec}`;
}
