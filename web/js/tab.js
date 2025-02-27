document.addEventListener("DOMContentLoaded", function () {
  // タブの初期化関数
  function initTabs() {
    const tabs = document.querySelectorAll(".tab");

    // デバッグ用
    console.log("Found tabs:", tabs.length);

    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        // イベントの伝播を停止
        event.preventDefault();
        event.stopPropagation();

        // クリックされたタブのdata-tab属性を取得
        const targetId = tab.getAttribute("data-tab");
        console.log("Clicked tab for:", targetId);

        // すべてのタブとコンテンツからactiveクラスを削除
        document.querySelectorAll(".tab").forEach((t) => {
          t.classList.remove("active");
        });
        document.querySelectorAll(".tab-content").forEach((content) => {
          content.classList.remove("active");
          content.style.display = "none"; // 明示的に非表示に
        });

        // クリックされたタブとそのコンテンツをアクティブに
        tab.classList.add("active");
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add("active");
          targetContent.style.display = "block"; // 明示的に表示

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
    // 最初のタブ以外を非表示に
    document
      .querySelectorAll(".tab-content:not(.active)")
      .forEach((content) => {
        content.style.display = "none";
      });
  }

  // 初期化を実行
  initTabs();
  initializeDisplay();
});
