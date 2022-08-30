$(document).ready(function () {
  $(".home-offers-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
  });

  $(".nav-browse-div").hover(function () {
    $(".nav-browse-drop-menu").toggleClass("nav-browse-drop-menu-visable");
  });

  $(".nav-recommended-div").hover(function () {
    $(".nav-recommended-drop-menu").toggleClass(
      "nav-recommended-drop-menu-visable"
    );
  });
});
