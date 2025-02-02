const header = document.querySelector(".header");

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    header.classList.remove("visible");
    header.classList.add("hidden");
  } else if (currentScrollPos === 0) {
    header.classList.remove("visible");
    header.classList.remove("hidden");
  } else {
    if (prevScrollpos > currentScrollPos) {
      header.classList.add("visible");
      header.classList.remove("hidden");
    }
  }
  prevScrollpos = currentScrollPos;
};
