$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  arrows: true,

  nextArrow: ".arrow_next",
  prevArrow: ".arrow_prev",

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 360,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
