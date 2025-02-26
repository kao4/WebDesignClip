document.addEventListener("DOMContentLoaded", function () {
  // タブの初期化関数
  function initTabs() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        // イベントの伝播を停止
        event.preventDefault();
        event.stopPropagation();

        // デバッグ情報
        console.log("Tab clicked");
        console.log("Clicked tab:", tab.dataset.tab);

        // 1. 現在のアクティブ要素を確認
        console.log(
          "Current active tab:",
          document.querySelector(".tab.active")
        );
        console.log(
          "Current active content:",
          document.querySelector(".tab-content.active")
        );

        // 2. アクティブクラスを削除
        document
          .querySelectorAll(".tab.active, .tab-content.active")
          .forEach((el) => {
            console.log("Removing active from:", el);
            el.classList.remove("active");
          });

        // 3. 新しいタブをアクティブに
        tab.classList.add("active");

        // 4. 対応するコンテンツを表示
        const content = document.getElementById(tab.dataset.tab);
        if (content) {
          content.classList.add("active");
          console.log("Activated content:", content);

          // 5. スライダーの再初期化（もし存在する場合）
          if (
            typeof Splide !== "undefined" &&
            content.querySelector(".splide")
          ) {
            console.log("Reinitializing slider in tab:", tab.dataset.tab);
            window.initSlider && window.initSlider();
          }
        } else {
          console.error("Content not found:", tab.dataset.tab);
        }
      });
    });
  }

  // タブの初期化を実行
  initTabs();
});
