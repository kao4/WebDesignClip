const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");
const mainContent = document.querySelector("main");

// ハンバーガーメニューのホバー状態をリセットする関数
const resetHamburgerHover = () => {
  hamburger.style.pointerEvents = "none";
  setTimeout(() => {
    hamburger.style.pointerEvents = "auto";
  }, 10);
};

// drawerを開く時にCategoryタブをアクティブにする関数
const activateCategoryTab = () => {
  // すべてのタブからactiveクラスを削除
  drawer.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Categoryタブを探してアクティブにする
  const categoryTab = drawer.querySelector(
    '.tab[data-tab="drawer__tab-category"]'
  );
  if (categoryTab) {
    categoryTab.classList.add("active");

    // タブコンテンツも切り替える
    drawer.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    const categoryContent = drawer.querySelector("#drawer__tab-category");
    if (categoryContent) {
      categoryContent.classList.add("active");
    }
  }
};

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("is-active");
  drawer.classList.toggle("is-active");
  if (mainContent) {
    mainContent.classList.toggle("drawer-active");
  }
  // drawerが開かれた時にCategoryタブをアクティブにする
  if (drawer.classList.contains("is-active")) {
    activateCategoryTab();
  }
});

// 以下は既存のコード
drawerLinks.forEach((drawerLink) => {
  drawerLink.addEventListener("click", (e) => {
    if (e.target.closest(".tab-content")) {
      e.stopPropagation();
      return;
    }
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-active");
    if (mainContent) {
      mainContent.classList.remove("drawer-active");
    }
    resetHamburgerHover();
  });
});

drawer.addEventListener("click", (e) => {
  if (e.target.closest(".tabs") || e.target.closest(".tab-contents")) {
    e.stopPropagation();
    return;
  }
  hamburger.classList.remove("is-active");
  drawer.classList.remove("is-active");
  if (mainContent) {
    mainContent.classList.remove("drawer-active");
  }
  resetHamburgerHover();
});
