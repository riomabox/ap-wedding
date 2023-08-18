/*---- Make Side Menu Div to controlable ----*/
var sideMenu = document.getElementById("side-menu");
/*---- Make Hamburger Button to controlable ----*/
var hamburgerBtn = document.getElementById("hamburger-button");
/*---- Make Sound Button to controlable ----*/
var soundBtn = document.getElementById("sound-button");
/*---- Handler for Open Side Menu with change right property to 0 ----*/
function sideMenuHandler() {
  /*---- If Side Menu Div invisible ----*/
  if (sideMenu.classList.contains("right-[-250px]")) {
    sideMenu.classList.remove("right-[-250px]");
    sideMenu.classList.add("right-0");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-x'></i>";
  } else {
    sideMenu.classList.remove("right-0");
    sideMenu.classList.add("right-[-250px]");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
  }
}
/*---- Handler for play backsongs ----*/
// function backsongsHandler() {
//   /*---- If backsongs is played ----*/
//   if (sideMenu.classList.contains("right-[-250px]")) {
//     sideMenu.classList.remove("right-[-250px]");
//     sideMenu.classList.add("right-0");
//     hamburgerBtn.innerHTML = "<i class='fa-solid fa-x'></i>";
//   } else {
//     sideMenu.classList.remove("right-0");
//     sideMenu.classList.add("right-[-250px]");
//     hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
//   }
// }
/*---- Handler for Close Side Menu with change right property to -250px ----*/
function closeMenu() {
  sideMenu.classList.remove("right-0");
  sideMenu.classList.add("right-[-250px]");
}

var openButton = document.getElementById("open");
var dialog = document.getElementById("dialog");
var closeButton = document.getElementById("close");
var overlay = document.getElementById("overlay");

// show the overlay and the dialog
openButton.addEventListener("click", function () {
  dialog.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// hide the overlay and the dialog
closeButton.addEventListener("click", function () {
  dialog.classList.add("hidden");
  overlay.classList.add("hidden");
});
