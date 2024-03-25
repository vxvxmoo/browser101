const btnPlay = document.querySelector(".button__play");
const boardTimer = document.querySelector(".board__timer");
const boardScore = document.querySelector(".board__score");
const cabinetBoard = document.querySelector(".cabinet__win_lost_board");
const btnRetry = document.querySelector(".button__retry");

let audioBgm = new Audio("sound/bg.mp3");
let timer;
let sec = 10;

btnPlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-start")) {
    // audioBgm.play();
    btnPlay.innerHTML = '<i class="fa-solid fa-stop btn-stop"></i>';
    boardTimer.innerText = `00:${sec}`;
    timer = setInterval(counterTimer, 1000);
    setTimeout(function () {
      audioBgm.pause();
    }, 10000);
  } else {
    btnPlay.innerHTML = '<i class="fa-solid fa-play btn-start"></i>';
    boardTimer.innerText = `00:${sec}`;
    cabinetBoard.style.visibility = "visible";
    btnRetry.addEventListener("click", (e) => {
      // 눌렀을 떄 게임 초기화 !
    });
    clearInterval(timer);
  }
});

function counterTimer() {
  if (sec == 0) {
    clearInterval(timer);
    boardTimer.innerText = "00:00";
    return;
  }
  sec--;
  boardTimer.innerText = `00:${sec}`;
}
