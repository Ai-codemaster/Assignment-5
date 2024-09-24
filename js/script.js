// Donate and History button edit
document
  .getElementById("show-donation-form")
  .addEventListener("click", function () {
    showSectionById("donation-form");
  });

document
  .getElementById("show-donation-history")
  .addEventListener("click", function () {
    showSectionById("donation-history");
  });

// Blog button click

document.getElementById("block-page").addEventListener("click", function () {
  window.location.href = "/blog.html";
});