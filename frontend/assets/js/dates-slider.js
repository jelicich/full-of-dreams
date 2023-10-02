document.addEventListener("DOMContentLoaded", function () {
  (function ($) {
    const SLIDER_SELECTOR = "#dates-slider";
    const SLIDE_SELECTOR = ".date-slide.keen-slider__slide";
    const ACTIVE_CLASS = "is-active";

    new KeenSlider(
      SLIDER_SELECTOR,
      {
        mode: "snap",
        range: { align: false },
        rubberband: false,
        slides: {
          origin: "auto",
          perView: "auto",
          spacing: "8",
        },
      },
      [sliderControlNavigation]
    );

    function sliderControlNavigation(self) {
      const arrowLeft = document.querySelector(
        '[data-arrow="date-picker-arrow-left"]'
      );
      const arrowRight = document.querySelector(
        '[data-arrow="date-picker-arrow-right"]'
      );

      const arrowsWrapper = document.querySelector(
        '[data-element="date-picker-arrows-wrapper"]'
      );

      function markup() {
        arrowMarkup();
        arrowsWrapper.classList.toggle("enable-slider");
      }

      function arrowMarkup() {
        arrowLeft && arrowLeft.addEventListener("click", () => self.prev());
        arrowRight && arrowRight.addEventListener("click", () => self.next());
      }

      function updateClasses() {
        const slide = self.track.details.rel;
        slide === 0
          ? arrowLeft?.classList.add("arrow--disabled")
          : arrowLeft?.classList.remove("arrow--disabled");

        slide === self.track.details.slides.length - 1
          ? arrowRight?.classList.add("arrow--disabled")
          : arrowRight?.classList.remove("arrow--disabled");
      }

      self.on("created", () => {
        markup();
        updateClasses();
      });
      self.on("optionsChanged", () => {
        markup();
        markup();
        updateClasses();
      });
      self.on("slideChanged", () => {
        updateClasses();
      });
      self.on("destroyed", () => {
        markup();
      });
    }

    $(SLIDE_SELECTOR).click(function () {
      $(SLIDE_SELECTOR).removeClass(ACTIVE_CLASS);
      $(this).addClass(ACTIVE_CLASS);

      // TODO: handle date selection
      console.log($(this).data("date"));
    });
  })(jQuery);
});
