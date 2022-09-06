$(document).ready(function () {
  if ($(window).width() < 768)
    $(".nav-items-div").accordion({
      autoHeight: false,
    });

  $(".all-questions-div").accordion({
    collapsible: true,
    heightStyle: SVGTextContentElement,
  });
});
