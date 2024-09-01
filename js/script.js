document
  .getElementById("navbar-toggle")
  .addEventListener("click", function (event) {
    document.getElementById("navbar-menu").classList.toggle("active");
    event.stopPropagation();
  });

// Close the navbar when clicking outside of it
document.addEventListener("click", function (event) {
  var isClickInside = document
    .getElementById("navbar-menu")
    .contains(event.target);
  var isToggleClick = document
    .getElementById("navbar-toggle")
    .contains(event.target);

  if (!isClickInside && !isToggleClick) {
    document.getElementById("navbar-menu").classList.remove("active");
  }
});
