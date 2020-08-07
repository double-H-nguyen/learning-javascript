const body = document.body;
const btn = document.getElementById("btn");
const hexValueElement = document.getElementById("hex-value");

// List of possible hex characters
const hexChar = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let hexValue = constructHexValue();
  body.style.backgroundColor = hexValue;
  hexValueElement.textContent = ` ${hexValue}`;
}

function constructHexValue() {
  let hexValue = "#";

  for (i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChar.length);
    hexValue += hexChar[randomIndex];
  }

  return hexValue;
}
