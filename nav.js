const nav = document.querySelector(".nav-auto-hide");
const scrollContainer = document.querySelector(".scroll-container");
let lastScrollY = 0;

scrollContainer?.addEventListener("scroll", () => {
  const currentScrollY = scrollContainer.scrollTop;
  if (currentScrollY > 80 && currentScrollY > lastScrollY) {
    nav?.classList.add("nav-hidden");
  } else {
    nav?.classList.remove("nav-hidden");
  }
  lastScrollY = currentScrollY;
});
