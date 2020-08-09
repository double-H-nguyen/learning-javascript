(function () {
  const LowerBtn = document.querySelector(".prevBtn");
  const AddBtn = document.querySelector(".nextBtn");
  const counterElement = document.querySelector("#counter");

  LowerBtn.addEventListener("click", decrementCounter);
  AddBtn.addEventListener("click", incrementCounter);

  function incrementCounter() {
    let newValue = parseInt(counterElement.textContent, 10) + 1;
    counterElement.textContent = newValue;
    updateCounterColor(newValue);
  }

  function decrementCounter() {
    let newValue = parseInt(counterElement.textContent, 10) - 1;
    counterElement.textContent = newValue;
    updateCounterColor(newValue);
  }

  function updateCounterColor(value) {
    if (value < 0) {
      counterElement.style.color = "red";
    } else if (value > 0) {
      counterElement.style.color = "green";
    } else {
      counterElement.style.color = "#333333";
    }
  }
})();
