//select the nav trigger btn
const navTrigger = document.querySelector("#navTrigger");

//select navigation
const nav = document.querySelector("#nav");

//select th nav close btn
const navCloseBtn = document.querySelector("#navClosebtn");

//select header
const header = document.querySelector("#header");

//add a click event listener to the nav trigger btn
navTrigger.addEventListener("click", () => {
  //toggle the "is-open" class on the navigation element to open/close the menu
  nav.classList.toggle("is-open");
});

//add a click event listener to the nav close btn
navCloseBtn.addEventListener("click", () => {
  //remove the "is-open" class from the navigation element
  nav.classList.remove("is-open");
});

//add a scroll event listener to the window
window.addEventListener("scroll", () => {
  //get the current vertical scroll position
  const scrollY = window.scrollY;
  console.log(scrollY);

  //add or remove the active class from header based on the scroll position
  scrollY > 50
    ? header.classList.add("is-active")
    : header.classList.remove("is-active");
});

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    const iconClass = isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
    const iconElement = item.querySelector("i");
    iconElement.classList = `${iconClass}`;
  });
});
