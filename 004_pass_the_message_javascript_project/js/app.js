(function () {
  const form = document.querySelector("#message-form");

  form.addEventListener("submit", function (e) {
    // prevents form from submitting immediately
    e.preventDefault();

    const msgInput = document.querySelector("#message");
    const msgOutput = document.querySelector(".message-content");
    const feedback = document.querySelector(".feedback");

    let msg = msgInput.value;

    // If user did not input anything, show error message
    // else, show message
    if (msg === "") {
      feedback.classList.add("show");

      // in 2 seconds, remove the class "show"
      setTimeout(function () {
        feedback.classList.remove("show");
      }, 2000);
    } else {
      msgOutput.textContent = msg;
    }
  });
})();
