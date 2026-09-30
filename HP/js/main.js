document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const globalNav = document.getElementById('globalNav');

  if (toggleBtn && globalNav) {
    toggleBtn.addEventListener('click', () => {
      globalNav.classList.toggle('active');
    });
  }
});