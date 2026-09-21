const menuBtn = document.querySelector(".humbargar-icon");
const sidebar = document.querySelector(".dashboard-sidebar");

menuBtn.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");

  // Keep accessibility synced for screen readers
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "close menu" : "open menu");
});
