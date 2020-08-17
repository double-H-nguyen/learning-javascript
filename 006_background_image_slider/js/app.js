(function () {
  let btnLeft = document.querySelector(".btn-left");
  let btnRight = document.querySelector(".btn-right");
  let imageBox = document.querySelector(".img-container");
  let n = 0; //assumes first image is 0

  btnRight.addEventListener("click", nextImage);
  btnLeft.addEventListener("click", prevImage);

  function nextImage() {
    n += 1;

    if (n > 4) { // assumes max image is 5
      n = 0;
    }

    imageBox.style.background = `url("./img/contBcg-${n}.jpeg") center/cover fixed no-repeat`;
  }

  function prevImage() {
    n -= 1;

    if (n < 0) {
      n = 4;
    }

    imageBox.style.background = `url("./img/contBcg-${n}.jpeg") center/cover fixed no-repeat`;
  }
})();
