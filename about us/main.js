$(".quote-section-container").slick({
  infinite: true,
  speed: 800,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  accessibility: false,
  arrows: false,
});
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
//Footer
$(document).ready(function () {
  $(".insta-gallery").magnificPopup({
    type: "image",
    delegate: "a",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,

      duration: 300,
      easing: "ease-in-out",

      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});
