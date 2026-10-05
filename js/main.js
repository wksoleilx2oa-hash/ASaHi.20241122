document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const globalNav = document.getElementById('globalNav');
  const navItems = document.querySelectorAll('.nav-item');

  // 1. ハンバーガーメニューの開閉処理
  if (toggleBtn && globalNav) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = globalNav.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  }

  // 2. スマホ版ドロップダウンメニューの開閉（アコーディオン）
  navItems.forEach(item => {
    const parentLink = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (parentLink && dropdown) {
      parentLink.addEventListener('click', (e) => {
        // 画面幅 900px 以下のみ動作
        if (window.innerWidth <= 900) {
          // ドロップダウン配下に子要素がある場合のみページ遷移をキャンセルして開閉
          e.preventDefault();

          // 他の開いているドロップダウンを閉じる（アコーディオンの排他処理）
          navItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('is-open');
            }
          });

          // 該当項目のトグル
          item.classList.toggle('is-open');
        }
      });
    }
  });

  // 3. メニュー外タップ時にモバイルメニューを閉じる処理
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900 && globalNav && globalNav.classList.contains('active')) {
      if (!globalNav.contains(e.target) && e.target !== toggleBtn) {
        closeMobileMenu();
      }
    }
  });

  // 4. Escキー押下時にメニューを閉じる処理（アクセシビリティ対応）
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // 5. 画面リサイズ時にスマホ用クラスをリセット（PC表示に戻った際のデザイン崩れ防止）
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });

  // メニューリセット用関数
  function closeMobileMenu() {
    if (globalNav) {
      globalNav.classList.remove('active');
    }
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    navItems.forEach(item => item.classList.remove('is-open'));
  }
});