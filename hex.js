const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let randomValue = "#";
//   for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * hex.length);
//     randomValue += hex[randomNumber];
//   }

//   color.textContent = randomValue;
//   document.body.style.background = randomValue;
// });
btn.addEventListener("click", function () {
  let randomValue = "";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);
    randomValue += hex[randomNumber];
  }

  color.textContent = `#${randomValue}`;
  document.body.style.background = `#${randomValue}`;
});
