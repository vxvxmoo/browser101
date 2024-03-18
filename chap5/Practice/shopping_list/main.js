const btnAdd = document.querySelector(".btn-add");
const inputArea = document.querySelector(".input-area");
const main = document.querySelector(".main");

btnAdd.addEventListener("click", (e) => {
  main.append(`${inputArea.value}`);
});
