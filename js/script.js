document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.querySelector(".mobile-menu-container");
  const body = document.body;
  menuIcon.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    body.classList.add("no-scroll");
  });

  closeIcon.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    body.classList.remove("no-scroll");
  });
});

const words = ["Modify", "Adjust", "Edit"];
let index = 0;

function changeText() {
  const dynamicText = document.getElementById("dynamic-text");

  dynamicText.classList.remove("show");
  dynamicText.classList.add("hide");

  setTimeout(() => {
    dynamicText.innerText = words[index];
    index = (index + 1) % words.length;

    dynamicText.classList.remove("hide");
    dynamicText.classList.add("show");
  }, 600);
}

setInterval(changeText, 2000);

// for ticker functionality
$(".bxslider").bxSlider({
  minSlides: 2,
  maxSlides: 4,
  slideWidth: 120,
  slideMargin: 8,
  ticker: true,
  speed: 50000,
  responsive: true,
});

// for reviews functionality
$(".reviewsSlider").bxSlider({
  minSlides: 1,
  maxSlides: 3,
  slideWidth: 400,
  slideMargin: 8,
  ticker: true,
  speed: 50000,
  responsive: true,
  tickerHover: true,
});

// for logos functionality
$(".logoSlider").bxSlider({
  minSlides: 2,
  maxSlides: 4,
  slideWidth: 130,
  slideMargin: 8,
  ticker: true,
  speed: 50000,
  responsive: true,
});

let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

$(document).ready(function () {
  var slider = $(".bxslider").bxSlider({
    auto: true, // Enable autoplay
    pause: 3000, // Time between slides (in milliseconds)
    mode: "fade", // Slide transition type
    controls: true,
    pager: true,
  });

  $(".bxslider").hover(
    function () {
      slider.stopAuto(); // Stop autoplay on hover
    },
    function () {
      slider.startAuto(); // Restart autoplay when mouse leaves
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons and promo cards
  const buttons = document.querySelectorAll(".possibility-bottom-top button");
  const promoCards = document.querySelectorAll(".promo-card");

  // Set first button as active and show its card by default
  buttons[0].classList.add("active");
  promoCards.forEach((card, index) => {
    card.style.display = index === 0 ? "flex" : "none";
  });

  // Add click event listeners to all buttons
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // Hide all promo cards
      promoCards.forEach((card) => {
        card.style.display = "none";
      });

      // Show only the promo card corresponding to the clicked button
      promoCards[index].style.display = "flex";

      // Update active button
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

$(".testimonial-container").bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 200,
  minSlides: 1,
  maxSlides: 4,
  moveSlides: 1,
  infiniteLoop: true,
});
