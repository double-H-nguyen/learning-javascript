(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const storeItems = document.querySelectorAll(".store-item");
  const searchBox = document.querySelector("#search-item");

  // Add event listener to filter buttons
  filterBtns.forEach(function (btn) {
    if (btn.dataset.filter == "all") {
      btn.addEventListener("click", showAllItems);
    } else {
      btn.addEventListener("click", filterItemsByBtn);
    }

    // stops the page from returning to the top when the user click on a filter button
    btn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  // Add event listener to search box
  searchBox.addEventListener("keyup", filterItemsBySearch);

  function showAllItems() {
    storeItems.forEach((item) => (item.style.display = "block"));
  }

  function filterItemsByBtn() {
    // filter
    let filter = this.dataset.filter;

    storeItems.forEach((item) => {
      if (item.dataset.item == filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function filterItemsBySearch() {
    searchTerm = this.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      let storeItemName = item
        .querySelector(".card-body .card-text #store-item-name")
        .textContent.toLowerCase();

      if (storeItemName.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
})();
