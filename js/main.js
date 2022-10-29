// All the work are menus ON/OFF
// [1] showing/not-showing menu in small screens
let toggleBar = document.querySelector(".header .menu-bar");
let xBar = document.querySelector(".x-bar");
let menu = document.querySelector(".header .menu");
let menuLayout = document.querySelector(".menu-layout");
console.log(menuLayout);

toggleBar.onclick = function () {
  menu.classList.add("show");
  menuLayout.classList.add("show");
};
xBar.onclick = function () {
  menu.classList.remove("show");
  menuLayout.classList.remove("show");
};

//close menu by pressing outside it
function stopP(e) {
  e.stopPropagation();
}
menu.addEventListener("click", stopP);
window.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu") ||
    e.target.classList.contains("menu-bar")
  ) {
  } else {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menuLayout.classList.remove("show");
    }
  }
});
// [2] dealing with small menus
let firstSM = document.querySelector(".small-menu.first");
let secondSM = document.querySelector(".small-menu.second");
let firstImg = document.querySelector(".has-menu.first span img");
let secondImg = document.querySelector(".has-menu.second span img");

let lis = document.querySelectorAll(".sections li");
lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    lis.forEach((one) => {
      one.classList.remove("active");
    });
    li.classList.add("active");
    // first small menu
    if (li.classList.contains("has-menu") && li.classList.contains("first")) {
      firstSM.classList.toggle("on");
      if (firstSM.classList.contains("on")) {
        firstImg.src = "images/icon-arrow-up.svg";
      } else {
        firstImg.src = "images/icon-arrow-down.svg";
      }
    }
    //second small menu
    if (li.classList.contains("has-menu") && li.classList.contains("second")) {
      secondSM.classList.toggle("on");
      if (secondSM.classList.contains("on")) {
        secondImg.src = "images/icon-arrow-up.svg";
      } else {
        secondImg.src = "images/icon-arrow-down.svg";
      }
    }
  });
});

firstSM.addEventListener("click", stopP);
secondSM.addEventListener("click", stopP);
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("has-menu")) {
    console.log("not");
  } else {
    if (firstSM.classList.contains("on")) {
      firstSM.classList.remove("on");
      firstImg.src = "images/icon-arrow-down.svg";
    }
    if (secondSM.classList.contains("on")) {
      secondSM.classList.remove("on");
      secondImg.src = "images/icon-arrow-down.svg";
    }
  }
});
