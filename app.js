const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const text = document.querySelector(".color");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 4);
  text.textContent = colors[randomNumber];
  document.body.style.background = colors[randomNumber];
});
