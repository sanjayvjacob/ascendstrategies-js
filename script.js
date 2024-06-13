//select the nav trigger btn
const navTrigger = document.querySelector("#navTrigger");

//select navigation
const nav = document.querySelector("#nav");

//select th nav close btn
const navCloseBtn = document.querySelector("#navClosebtn");

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
