const nav = document.querySelector(".nav");

let wasAtTop = true;

window.addEventListener("scroll", () => {
  const atTop = window.scrollY <= 0;

  // Returned to top
  if (atTop) {
    nav.classList.remove("scrolled");
    nav.classList.remove("flash");
    wasAtTop = true;
    return;
  }

  // First time leaving the top
  if (wasAtTop) {
    nav.classList.remove("flash");
    void nav.offsetWidth; // restart animation

    nav.classList.add("flash");
    nav.classList.add("scrolled");

    wasAtTop = false;
  }
});
