// タブ切り替えの処理
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      // アクティブなタブとコンテンツを非表示に
      document
        .querySelectorAll(".tab.active, .tab-content.active")
        .forEach((el) => el.classList.remove("active"));

      // クリックされたタブとそれに対応するコンテンツを表示
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
});
