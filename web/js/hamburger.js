const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");
const mainContent = document.querySelector("main");

// ハンバーガーメニューのホバー状態をリセットする関数
const resetHamburgerHover = () => {
  // 強制的にホバー状態を解除
  hamburger.style.pointerEvents = "none";
  setTimeout(() => {
    hamburger.style.pointerEvents = "auto";
  }, 10);
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  drawer.classList.toggle("is-active");
  if (mainContent) {
    mainContent.classList.toggle("drawer-active");
  }
});

drawerLinks.forEach((drawerLink) => {
  drawerLink.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-active");
    if (mainContent) {
      mainContent.classList.remove("drawer-active");
    }
    resetHamburgerHover();
  });
});

drawer.addEventListener("click", () => {
  // タブやタブコンテンツをクリックした場合は閉じない
  if (e.target.closest(".tabs") || e.target.closest(".tab-contents")) {
    return;
  }
  drawer.classList.remove("is-active");
  if (mainContent) {
    mainContent.classList.remove("drawer-active");
  }
  resetHamburgerHover();
});
