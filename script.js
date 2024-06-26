let themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.firstChild.classList = "bi bi-moon-stars";
  } else {
    themeToggle.firstChild.classList = "bi bi-cloud-sun";
  }
});
