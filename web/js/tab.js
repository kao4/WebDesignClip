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

              // 既存のページネーション要素をクリア
              const existingPagination = slider.querySelector(
                ".splide__pagination"
              );
              if (existingPagination) {
                existingPagination.innerHTML = "";
              }

              // 既存のSplideインスタンスを破棄
              if (slider.splide) {
                slider.splide.destroy(true);
              }
              // 新しいSplideインスタンスを作成
              const newSplide = new Splide(slider, {
                pagination: true,
                perPage: 1,
                arrows: true,
                // 必要に応じて他のオプションを追加
              });

              //  mountedイベントハンドラを追加
              newSplide.on("mounted", function () {
                const bullets = slider.querySelectorAll(
                  ".splide__pagination__page"
                );
                bullets.forEach(function (bullet, index) {
                  bullet.textContent = index + 1;
                });
              });

              newSplide.mount();
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
