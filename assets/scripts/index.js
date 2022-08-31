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

  $(".nav-contact-div").hover(function () {
    $(".nav-contact-drop-menu").toggleClass("nav-contact-drop-menu-visable");
  });

  const body = document.body;
  const scrollUpClass = "body--scroll-up";

  const lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove(scrollUpClass);
      return;
    }

    if (currentScroll > lastScroll) {
      body.classList.add(scrollUpClass);
    }
    lastScroll = currentScroll;
  });
});
