document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const globalNav = document.getElementById('globalNav');

  // ハンバーガーメニュー開閉
  if (toggleBtn && globalNav) {
    toggleBtn.addEventListener('click', () => {
      globalNav.classList.toggle('active');
    });
  }

  // スマホ版ドロップダウンメニューの開閉（アコーディオン）
  const dropdownParents = document.querySelectorAll('.nav-item');
  dropdownParents.forEach(item => {
    const parentLink = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (parentLink && dropdown) {
      parentLink.addEventListener('click', (e) => {
        // 画面幅900px以下（スマホ・タブレット表示時）のみタップで開閉
        if (window.innerWidth <= 900) {
          e.preventDefault(); // リンク遷移を防いで開閉
          item.classList.toggle('is-open');
        }
      });
    }
  });
});