const SidebarButton = document.getElementById('sidebar-button')
const SidebarToggle = document.getElementById('SideMenuBar')

SidebarButton.addEventListener('click', () => {
    SideMenuBar.classList.toggle('active');
  });