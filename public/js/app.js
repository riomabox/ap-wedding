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

const bukaUndangan = async () => {
  const body = document.getElementsByTagName("BODY")[0];
  const modalHomepage = document.getElementById("dialog");
  const hamburgerBtn = document.getElementById("hamburger-button");
  const soundBtn = document.getElementById("sound-button");
  document.getElementById("open-invitation-button").disabled = true;

  setTimeout(
    (document.getElementById("open-invitation-img").src =
      "../public/icons/loading-spinner.svg"),
    3000,
  );
  document.getElementById("open-invitation-img").classList.add("animate-spin");

  const BukaUndanganClicked = () => {
    body.classList.remove("overflow-hidden");
    modalHomepage.classList.add("top-[-100vh]");
    hamburgerBtn.classList.remove("hidden");
    soundBtn.classList.remove("hidden");
  };

  setTimeout(BukaUndanganClicked, 3000);
  // document.getElementById('tombol-musik').style.display = 'block';
  // audio.play();
  // AOS.init();
  // await login();
  // timer();
};
