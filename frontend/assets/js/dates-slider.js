document.addEventListener("DOMContentLoaded", function () {
  (function ($) {
    const SLIDER_SELECTOR = "#dates-slider";
    const SLIDE_SELECTOR = ".date-slide.keen-slider__slide";
    const ACTIVE_CLASS = "is-active";

    new KeenSlider(SLIDER_SELECTOR, {
      mode: "snap",
      range: { align: false },
      rubberband: false,
      slides: {
        origin: "auto",
        perView: "auto",
        spacing: "8",
      },
    });

    $(SLIDE_SELECTOR).click(function () {
      $(SLIDE_SELECTOR).removeClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);

      // TODO: handle date selection
      console.log($(this).data("date"));
    });
  })(jQuery);
});
