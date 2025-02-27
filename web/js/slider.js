// グローバルスコープで初期化関数を定義
window.initSlider = function () {
  if (typeof Splide !== "undefined") {
    // 既存のスライダーを破棄（もし存在すれば）
    const existingSlider = document.querySelector("#section-splide");
    if (existingSlider) {
      const splide = new Splide("#section-splide", {
        type: "slide",
        perPage: 1,
        arrows: false,
        pagination: true,
        speed: 600,
        easing: "ease",
        gap: "1rem",
        padding: { left: 0, right: 0 },
        classes: {
          // ページネーションのクラスを追加
          pagination: "splide__pagination",
          page: "splide__pagination__page",
        },
      });

      // スライダーが準備完了したときに実行される処理
      splide.on("mounted", function () {
        const bullets = document.querySelectorAll(".splide__pagination__page");
        bullets.forEach(function (bullet, index) {
          bullet.textContent = index + 1;
        });
      });

      splide.mount();
    }
  } else {
    console.error("Splide is not loaded");
  }
};

// 初期ロード時にスライダーを初期化
document.addEventListener("DOMContentLoaded", function () {
  window.initSlider();
});
