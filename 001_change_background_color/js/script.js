const btn = document.getElementById("click_me");
const body = document.body;
const colorList = ["red", "blue", "green", "orange", "grey"];

btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let randomIndex = Math.floor(Math.random() * colorList.length);
  body.style.backgroundColor = colorList[randomIndex];
}
