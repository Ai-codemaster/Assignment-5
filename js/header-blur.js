const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    header.classList.add("backdrop-blur");
    header.classList.add("bg-[--header-blur]");
    navbar.classList.add("bg-[--header-scroll-background]");
  } else {
    header.classList.remove("backdrop-blur");
    header.classList.remove("bg-[--header-blur]");
    navbar.classList.remove("bg-[--header-scroll-background]");
  }
});
