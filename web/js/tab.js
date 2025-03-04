document.addEventListener("DOMContentLoaded", function () {
  // タブの初期化関数
  function initTabs() {
    const tabs = document.querySelectorAll(".tab");
    // デバッグ用
    console.log("Found tabs:", tabs.length);

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // クリックされたタブのdata-tab属性を取得
        const targetId = this.getAttribute("data-tab");

        console.log("クリックされたタブ:", this.textContent);
        console.log("Clicked tab for:", targetId);

        // すべてのタブからactiveクラスを削除
        tabs.forEach((t) => t.classList.remove("active"));
        // すべてのコンテンツを非表示
        document.querySelectorAll(".tab-content").forEach((content) => {
          content.classList.remove("active");
        });

        // クリックされたタブとそのコンテンツをアクティブに
        tab.classList.add("active");
        // 対応するコンテンツを表示
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add("active");

          // Splideスライダーの再初期化（必要な場合）
          if (typeof Splide !== "undefined") {
            const slider = targetContent.querySelector(".splide");
            if (slider) {
              console.log("Reinitializing slider in:", targetId);
              window.initSlider && window.initSlider();
            }
          }
        }
      });
    });
  }

  // 初期表示の設定
  function initializeDisplay() {
    const firstTab = document.querySelector(".tab.active");
    if (firstTab) {
      const targetId = firstTab.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    }
  }

  // 初期化を実行
  initTabs();
  initializeDisplay();
});
