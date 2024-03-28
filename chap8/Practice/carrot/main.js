const btnPlay = document.querySelector(".button__play");
const boardTimer = document.querySelector(".board__timer");
const boardScore = document.querySelector(".board__score");
const cabinetBugCarrot = document.querySelector(".cabinet__bug_carrot");
const cabinetBoard = document.querySelector(".cabinet__win_lost_board");
const btnRetry = document.querySelector(".button__retry");
const displayBackground = document.querySelector(".display__background");
const cabinetButton = document.querySelector(".cabinet__button");

let bugImage;
let carrotImage;

let audioBgm = new Audio("sound/bg.mp3");
let timer;
let sec = 10;

btnPlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-start")) {
    // audioBgm.play();
    gameStart();
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
    btnRetry.addEventListener("click", (e) => {});
    clearInterval(timer);
  }
});

function gameStart() {
  // bug, carrot 개수 -> 15~25개 사이로 정함
  const bugs = Math.floor(Math.random() * 10) + 15;
  const carrots = Math.floor(Math.random() * 10) + 15;

  // 배치할 위치 지정
  let top = displayBackground.offsetTop + cabinetButton.offsetHeight;
  let left = displayBackground.offsetLeft;
  let width = displayBackground.offsetWidth;
  let height = displayBackground.offsetHeight;

  for (let i = 0; i < carrots; i++) {
    let offX = parseInt(Math.random() * width);
    let offY = parseInt(Math.random() * height);

    console.log(
      `top: ${top}, left: ${left}, width: ${width}, height: ${height}`
    );
    left += offX;
    top += offY;

    carrotImage = document.createElement("img");

    carrotImage.setAttribute("src", "img/carrot.png");

    carrotImage.style.position = "absolute";
    carrotImage.style.left = left + "px";
    carrotImage.style.top = top + "px";

    cabinetBugCarrot.appendChild(carrotImage);
  }
}

function catchBug() {
  // 타이머 멈춤
  // YOU LOST 문구
}

function catchCarrot() {
  // 타이머에 시간이 남아 있으면 계속 진행
  // // // 이때 당근 개수가 0이면 YOU WIN
  // 타이머에 시간이 남지 않았으면 타이머 멈추고, YOU LOST 문구
}

function counterTimer() {
  if (sec == 0) {
    clearInterval(timer);
    boardTimer.innerText = "00:00";
    return;
  }
  sec--;
  boardTimer.innerText = `00:${sec}`;
}

window.addEventListener("load", (e) => {
  let boardScoreBottom = boardScore.getBoundingClientRect();
  let displayBackground = document
    .querySelector(".display__background")
    .getBoundingClientRect();

  // console.log(`주황 동그라미 - bottom: ${boardScoreBottom.bottom}`);
  // console.log(`전체 div - left: ${displayBackground.left}`);
  // console.log(`전체 div - right: ${displayBackground.right}`);
});
