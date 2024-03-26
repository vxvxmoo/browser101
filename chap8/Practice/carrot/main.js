const btnPlay = document.querySelector(".button__play");
const boardTimer = document.querySelector(".board__timer");
const boardScore = document.querySelector(".board__score");
const cabinetBugCarrot = document.querySelector(".cabinet__bug_carrot");
const cabinetBoard = document.querySelector(".cabinet__win_lost_board");
const btnRetry = document.querySelector(".button__retry");
const displayBackground = document.querySelector(".display__background");

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
  let top = boardScore.getBoundingClientRect().top;
  let left = displayBackground.getBoundingClientRect().left;
  let bottom = displayBackground.getBoundingClientRect().bottom;
  let right = displayBackground.getBoundingClientRect().right;

  // 위의 수를 토대로 bug, carrot 배치
  for (let i = 0; i < bugs; i++) {
    bugImage = document.createElement("img");
    bugImage.setAttribute("src", "img/bug.png");
    bugImage.style.top = Math.floor(Math.random() * 10) + top;
    bugImage.style.left = Math.floor(Math.random() * 10) + left;
    bugImage.style.bottom = Math.floor(Math.random() * 10) + bottom;
    bugImage.style.right = Math.floor(Math.random() * 10) + right;
    cabinetBugCarrot.appendChild(bugImage);
  }
  for (let i = 0; i < carrots; i++) {
    carrotImage = document.createElement("img");
    carrotImage.setAttribute("src", "img/carrot.png");
    carrotImage.style.top = Math.floor(Math.random() * 10) + top;
    carrotImage.style.left = Math.floor(Math.random() * 10) + left;
    carrotImage.style.bottom = Math.floor(Math.random() * 10) + bottom;
    carrotImage.style.right = Math.floor(Math.random() * 10) + right;
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
