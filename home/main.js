// Menu-toggle button

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

$(document).ready(function () {
  $(".slider")
    .slick({
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 600,
      lazyLoad: "progressive",
      arrows: false,
      dots: true,
      pauseOnHover: false,
    })
    .slickAnimation();

  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });
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
