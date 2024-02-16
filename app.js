// creating dynamic menu
let menu = document.querySelector(".menu-container");
let itemsOfMenu = null;

fetch("./data1.json")
  .then((response) => response.json())
  .then((data) => ((itemsOfMenu = data), showData()))
  .catch((err) => console.log(err));

function showData() {
  if (itemsOfMenu != null) {
    itemsOfMenu.forEach((item) => {
      let box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `
	                <div class="box-img">
	                    <img src="${item.img}" alt="">
	                </div>
	                <h2>${item.h2}</h2>
	                <h3>${item.h3}</h3>
	                <span>${item.price}</span>
                    <i class="bx ri-shopping-cart-fill"></i>
                   `;
      menu.appendChild(box);
    });
  }
}

// navbar
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// active DarkMood and local storage
let darkmood = document.getElementById("darkmood");
const darkModeKey = "darkMode";
let isDarkMode = JSON.parse(localStorage.getItem(darkModeKey)) || false;

if (isDarkMode) {
  // Apply dark mode styles
  document.body.classList.add("active");
  darkmood.classList.replace("ri-sun-line", "ri-moon-clear-fill");
} else {
  // Apply light mode styles
  document.body.classList.remove("active");
  darkmood.classList.replace("ri-moon-clear-fill", "ri-sun-line");
}

darkmood.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add("active");
    darkmood.classList.replace("ri-sun-line", "ri-moon-clear-fill");
  } else {
    document.body.classList.remove("active");
    darkmood.classList.replace("ri-moon-clear-fill", "ri-sun-line");
  }

  localStorage.setItem(darkModeKey, JSON.stringify(isDarkMode));
});

// set animations
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: false,
});

sr.reveal(
  `.txt-home, .img-home,
          .img-about, .txt-about,
          .menu-container, .s-box,
          .connect,
          .contact-box`,
  {
    interval: 200,
  }
);
