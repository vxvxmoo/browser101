const vLine = document.querySelector(".v-line");
const hLine = document.querySelector(".h-line");
const cursor = document.querySelector(".cursor-coordinate");

addEventListener("mousemove", (e) => {
  cursor.innerHTML = `
    x축: ${e.clientX}, y축: ${e.clientY}
  `;
  vLine.style.setPro;
});
