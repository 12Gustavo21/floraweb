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

document.querySelectorAll(".group").forEach((group) => {
  const input = group.querySelector(".input");
  const label = group.querySelector(".label");

  input.addEventListener("focus", () => {
    label.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      label.classList.remove("active");
    }
  });
});

const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

function voltarPagina() {
  if (
    document.referrer.includes(window.location.hostname) &&
    history.length > 1
  ) {
    history.back();
  } else {
    window.location.href = "../../index.html"; 
  }
}
