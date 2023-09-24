/*---- Make Side Menu Div to controlable ----*/
var sideMenu = document.getElementById("side-menu");
/*---- Make Hamburger Button to controlable ----*/
var hamburgerBtn = document.getElementById("hamburger-button");
/*---- Make Sound Button to controlable ----*/
var soundBtn = document.getElementById("sound-button");
/*---- Handler for Open Side Menu with change right property to 0 ----*/
var overlay = document.getElementById("overlay");
function sideMenuHandler() {
  /*---- If Side Menu Div invisible ----*/
  if (sideMenu.classList.contains("right-[-75vw]")) {
    sideMenu.classList.remove("right-[-75vw]");
    sideMenu.classList.add("right-0");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-x'></i>";
    overlay.style.display = "block";
  } else {
    sideMenu.classList.remove("right-0");
    sideMenu.classList.add("right-[-75vw]");
    hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    overlay.style.display = "none";
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
  sideMenu.classList.add("right-[-75vw]");
  overlay.style.display = "none";
  if (hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>") {hamburgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>"};
  
}

const bukaUndangan = async () => {
  const body = document.getElementsByTagName("BODY")[0];
  const modalHomepage = document.getElementById("dialog");
  const hamburgerBtn = document.getElementById("hamburger-button");
  const soundBtn = document.getElementById("sound-button");
  document.getElementById("open-invitation-button").disabled = true;
  const undanganTitle = document.getElementById("undangan-title");
  const namaTitle = document.getElementById("nama-title");
  const tanggalTitle = document.getElementById("tanggal-title");

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
    undanganTitle.classList.add("animate-fade-up","animate-duration-1000","animate-once");
    namaTitle.classList.add("animate-fade-up","animate-duration-1000","animate-once", "animate-delay-[700ms]");
    tanggalTitle.classList.add("animate-fade-up","animate-duration-1000","animate-once", "animate-delay-[1400ms]");
  };

  setTimeout(BukaUndanganClicked, 3000);
  // document.getElementById('tombol-musik').style.display = 'block';
  // audio.play();
  // AOS.init();
  // await login();
  // timer();


  
  const timer = () => {
    let weddingDate = document.getElementById('countdown').getAttribute('data-waktu');
    let countdownDate = (new Date(weddingDate)).getTime();
    let time = null;
    let distance = null;
  
    time = setInterval(()=>{
        distance = countdownDate - (new Date()).getTime();
  
        if (distance < 0) {
          clearInterval(time);
          time = null;
          return true;
        }
  
        document.getElementById('hari').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('jam').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        document.getElementById('menit').innerHTML = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
        document.getElementById('detik').innerHTML = Math.floor((distance % (1000 * 60))/ (1000));

    }, 1000)
  }

  timer()
};

  const copyText = (button) => {
    // const dataAccount = button.getAttribute("data-account");
    const dataAccount = button.getAttribute("data-account");
    navigator.clipboard.writeText(dataAccount);
    let buttonText = button.innerHTML;
    button.innerHTML = `Tersalin`;
    button.disabled = true;

    setTimeout(()=>{
      button.innerHTML = buttonText;
      button.disabled = false;
      button.focus();
    }, 1500);
  }

