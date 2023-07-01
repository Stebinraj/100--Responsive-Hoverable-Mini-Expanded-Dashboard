const btn = document.getElementById('btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const overlay = document.getElementById('overlay');
let sidebarVisible = false;

btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-expanded');
    mainContent.style.marginLeft = sidebarVisible ? "50px" : "200px";
    document.body.classList.toggle('overlay-visible');
    sidebarVisible = !sidebarVisible;
});

overlay.addEventListener('click', () => {
    btn.click();
});