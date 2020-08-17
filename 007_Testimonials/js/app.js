(function () {
  // Customer object constructor
  function Customer(name, img, text) {
    this.name = name;
    this.image = img;
    this.testimonial = text;
  }

  let customers = [
    new Customer(
      "Ted",
      "img/customer-0.jpg",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
    ),
    new Customer(
      "John",
      "img/customer-1.jpg",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    ),
    new Customer(
      "Phil",
      "img/customer-2.jpg",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    ),
    new Customer(
      "Tyrell",
      "img/customer-3.jpg",
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    ),
    new Customer(
      "Sean",
      "img/customer-4.jpg",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ),
  ];

  let btns = document.querySelectorAll(".btn");
  let customerNameElement = document.querySelector("#customer-name");
  let customerImgElement = document.querySelector("#customer-img");
  let customerTextElement = document.querySelector("#customer-text");

  // set default
  let customerIndex = 0;
  setDefaultTestimonial(customerIndex);

  // add event listenrs to buttons
  btns.forEach(function (btn, index) {
    if (btn.className == "btn prevBtn") {
      btn.addEventListener("click", prevTestimonial);
    } else if (btn.className == "btn nextBtn") {
      btn.addEventListener("click", nextTestimonial);
    }
  });

  function setDefaultTestimonial(index = 0) {
    updateTestimonial(index);
  }

  function prevTestimonial() {
    customerIndex -= 1;
    if (customerIndex < 0) {
      customerIndex = customers.length - 1;
    }
    updateTestimonial(customerIndex);
  }

  function nextTestimonial() {
    customerIndex += 1;
    if (customerIndex > customers.length - 1) {
      customerIndex = 0;
    }
    updateTestimonial(customerIndex);
  }

  function updateTestimonial(index) {
    customerNameElement.textContent = customers[index].name;
    customerImgElement.src = customers[index].image;
    customerTextElement.textContent = customers[index].testimonial;
  }
})();
