document.addEventListener("DOMContentLoaded", function () {
  (function ($) {
    const SLIDER_SELECTOR = "#ticket_recommendations_carousel";

    new KeenSlider(SLIDER_SELECTOR, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 15 },
        },
      },
      slides: { perView: 1 },
    });
  })(jQuery);
});
