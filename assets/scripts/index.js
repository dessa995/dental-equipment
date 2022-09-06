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
    if ($(window).width() > 768)
      $(".nav-browse-drop-menu").toggleClass("nav-browse-drop-menu-visable");
  });

  $(".nav-browse-div").click(function () {
    $(".nav-browse-drop-menu").toggleClass("nav-browse-drop-menu-visable");
  });

  $(".nav-recommended-div").hover(function () {
    if ($(window).width() > 768)
      $(".nav-recommended-drop-menu").toggleClass(
        "nav-recommended-drop-menu-visable"
      );
  });

  $(".nav-recommended-div").click(function () {
    $(".nav-recommended-drop-menu").toggleClass(
      "nav-recommended-drop-menu-visable"
    );
  });

  $(".nav-contact-div").hover(function () {
    if ($(window).width() > 768)
      $(".nav-contact-drop-menu").toggleClass("nav-contact-drop-menu-visable");
  });

  $(".nav-contact-div").click(function () {
    $(".nav-contact-drop-menu").toggleClass("nav-contact-drop-menu-visable");
  });

  $(".nav-bar-menu-icon-link").click(function () {
    $(".nav-bar").toggleClass("nav-bar-active");
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

  const firstName = document.querySelector(".first-name-textarea");
  const lastName = document.querySelector(".last-name-textarea");
  const phoneNumber = document.querySelector(".phone-number-textarea");
  const email = document.querySelector(".email-textarea");
  const messageContent = document.querySelector(".message-textarea");
  const submitButton = document.querySelector(".contact-submit-button");

  submitButton.addEventListener("click", function myFunction() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const phoneNumberValue = phoneNumber.value;
    const emailValue = email.value;
    const messageValue = messageContent.value;
    alert(
      `${firstNameValue} ${lastNameValue} ${phoneNumberValue} ${emailValue} ${messageValue}`
    );
  });

  $(messageContent).keypress(function (e) {
    if (e.which == 13) {
      const firstNameValue = firstName.value;
      const lastNameValue = lastName.value;
      const phoneNumberValue = phoneNumber.value;
      const emailValue = email.value;
      const messageValue = messageContent.value;
      alert(
        `${firstNameValue} ${lastNameValue} ${phoneNumberValue} ${emailValue} ${messageValue}`
      );
    }
  });
});
