function setActiveLink() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-list a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
    }
  });
}

function setupMenuToggle() {
  const btn = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");
  if (!btn || !navList) return;

  btn.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  setupMenuToggle();
});
