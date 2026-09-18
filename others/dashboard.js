document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  const menuButton = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');

  menuButton.addEventListener('click', () => {

    // Solo funciona en modo móvil
    if (window.innerWidth < 600) {
      sidebar.classList.toggle('open');
    }

  });
});