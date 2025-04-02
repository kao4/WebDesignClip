document.addEventListener("DOMContentLoaded", function () {
  function initTabs() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function (e) {
        e.stopPropagation(); // イベントの伝播を停止

        // タブがdrawer内かどうかを確認
        const isDrawerTab = this.closest(".drawer");

        // クリックされたタブのdata-tab属性を取得
        const targetId = this.getAttribute("data-tab");

        // タブのコンテナを取得（drawerまたはメインコンテンツ）
        const tabContainer = isDrawerTab ? this.closest(".drawer") : document;

        // 同じコンテナ内のタブのみを対象にする
        const containerTabs = tabContainer.querySelectorAll(".tab");
        containerTabs.forEach((t) => t.classList.remove("active"));

        // 同じコンテナ内のコンテンツのみを対象にする
        const containerContents = tabContainer.querySelectorAll(".tab-content");
        containerContents.forEach((content) => {
          content.classList.remove("active");
        });

        // クリックされたタブとそのコンテンツをアクティブに
        this.classList.add("active");
        const targetContent = tabContainer.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add("active");
        }

        // Splideの初期化処理（既存のコード）
        if (typeof Splide !== "undefined") {
          // ... 既存のSplide関連のコード ...
        }
      });
    });
  }

  // 初期表示の設定を修正
  function initializeDisplay() {
    // メインのタブとdrawerのタブそれぞれで初期化
    const tabContainers = document.querySelectorAll(".drawer, body");
    tabContainers.forEach((container) => {
      const firstTab = container.querySelector(".tab.active");
      if (firstTab) {
        const targetId = firstTab.getAttribute("data-tab");
        const targetContent = container.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      }
    });
  }

  initTabs();
  initializeDisplay();
});
