var foodMenuBtn = document.getElementsByClassName("food-menu-btn")[0];
var barMenuBtn = document.getElementsByClassName("bar-menu-btn")[0];
var bookingBtn = document.getElementsByClassName("booking-btn")[0];
var foodCategories = document.getElementsByClassName("food-categories")[0];
var barCategories = document.getElementsByClassName("bar-categories")[0];
var bookingCategories =
  document.getElementsByClassName("booking-categories")[0];
var foodArrow = foodMenuBtn.querySelector("#arrow-icon");
var barArrow = barMenuBtn.querySelector("#arrow-icon");
var bookingArrow = bookingBtn.querySelector("#arrow-btn");

function changeFoodDisplay() {
  if (foodCategories.style.display === "none") {
    foodCategories.style.display = "flex";
    foodArrow.src = "./assets/arrow-up.svg";

    if (barCategories.style.display === "flex") {
      barCategories.style.display = "none";
      barArrow.src = "./assets/arrow-down.svg";
    }
    if (bookingCategories.style.display === "flex") {
      bookingCategories.style.display = "none";
      bookingArrow.src = "./assets/arrow-down.svg";
    }
  } else {
    foodCategories.style.display = "none";
    foodArrow.src = "./assets/arrow-down.svg";
  }
}

function changeBarDisplay() {
  if (barCategories.style.display === "none") {
    barCategories.style.display = "flex";
    barArrow.src = "./assets/arrow-up.svg";

    if (foodCategories.style.display === "flex") {
      foodCategories.style.display = "none";
      foodArrow.src = "./assets/arrow-down.svg";
    }
    if (bookingCategories.style.display === "flex") {
      bookingCategories.style.display = "none";
      bookingArrow.src = "./assets/arrow-down.svg";
    }
  } else {
    barCategories.style.display = "none";
    barArrow.src = "./assets/arrow-down.svg";
  }
}

function changeBookingDisplay() {
  if (bookingCategories.style.display === "none") {
    bookingCategories.style.display = "flex";
    bookingArrow.src = "./assets/arrow-up.svg";

    if (foodCategories.style.display === "flex") {
      foodCategories.style.display = "none";
      foodArrow.src = "./assets/arrow-down.svg";
    }
    if (barCategories.style.display === "flex") {
      barCategories.style.display = "none";
      barArrow.src = "./assets/arrow-down.svg";
    }
  } else {
    bookingCategories.style.display = "none";
    bookingArrow.src = "./assets/arrow-down.svg";
  }
}

foodMenuBtn.addEventListener("click", changeFoodDisplay);
barMenuBtn.addEventListener("click", changeBarDisplay);
bookingBtn.addEventListener("click", changeBookingDisplay);
