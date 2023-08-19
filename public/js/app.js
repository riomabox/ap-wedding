const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

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
  document.getElementById("open-invitation-img").src =
    "../public/icons/loading-spinner.svg";
  document.getElementById("open-invitation-img").classList.add("animate-spin");

  const BukaUndanganClicked = () => {
    body.classList.remove("overflow-hidden");
    document.getElementById("loadPage").classList.add("hidden");
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

const progressBar = (() => {
  let bar = document.getElementById("bar");
  let second = 0;
  let counter = 0;
  let stop = false;

  const sleep = (until) =>
    new Promise((p) => {
      setTimeout(p, until);
    });

  const setNum = (num) => {
    bar.style.width = num + "%";
    // bar.innerText = num + "%";

    return num == 100 || stop;
  };

  (async () => {
    while (true) {
      if (stop || setNum(counter)) {
        break;
      }

      await sleep(second);
      second += counter * counter;
      counter += 1;
    }
  })();

  return {
    stop: () => {
      stop = true;
      setNum(100.0);
    },
  };
})();

const opacity = () => {
  let modal = new Promise((res) => {
    let clear = null;
    clear = setInterval(() => {
      console.info("clear : ", clear);
      if (document.getElementById("dialog").classList.contains("fixed")) {
        clearInterval(clear);
        res();
      }
    }, 100);
  });

  modal.then(() => {
    progressBar.stop();

    let op = parseInt(document.getElementById("loadPage").style.opacity);
    let clear = null;

    clear = setInterval(() => {
      if (op >= 0) {
        op -= 0.025;
        document.getElementById("loadPage").style.opacity = op;
        console.info("info: ", op);
      } else {
        clearInterval(clear);
        // document.getElementById("loadPage").remove();
        // document.getElementById("dialog").classList.add("animate-fade");
      }
    }, 10);
  });
};

window.addEventListener(
  "load",
  async () => {
    if (document.getElementById("loadPage").classList.contains("hidden")) {
      document.getElementById("loadPage").classList.replace("hidden", "flex");
    }
    let modal = document.getElementById("dialog");
    let name = new URLSearchParams(window.location.search).get("to") ?? "";

    if (name.length == 0) {
      document.getElementById("tujuan-tamu").remove();
    } else {
      let namaTamu = document.getElementById("nama-tamu");
      console.log(name);
      namaTamu.innerText = escapeHtml(name);
      // document.getElementById("formnama").value = name;
    }

    setInterval(() => {
      if (modal.classList.contains("hidden")) {
        modal.classList.replace("hidden", "fixed");
      }
    }, 2000);
    opacity();
  },
  false,
);
