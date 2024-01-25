const mobileScreen = window.matchMedia("(max-width: 990px)");

$(document).ready(function () {
  $(".dashboard-nav-dropdown-toggle").click(function () {
    const dropdown = $(this).closest(".dashboard-nav-dropdown");
    dropdown.toggleClass("show").siblings().removeClass("show");
  });

  $(".menu-toggle").click(function () {
    if (mobileScreen.matches) {
      $(".dashboard-nav").toggleClass("mobile-show");
    } else {
      $(".dashboard").toggleClass("dashboard-compact");
    }
  });
});