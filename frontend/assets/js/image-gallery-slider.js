document.addEventListener("DOMContentLoaded", function () {
  (function ($) {
    function ThumbnailPlugin(main) {
      return (slider) => {
        function removeActive() {
          slider.slides.forEach((slide) => {
            slide.classList.remove("active");
          });
        }
        function addActive(idx) {
          slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
          slider.slides.forEach((slide, idx) => {
            slide.addEventListener("click", () => {
              main.moveToIdx(idx);
            });
          });
        }

        slider.on("created", () => {
          addActive(slider.track.details.rel);
          addClickEvents();
          main.on("animationStarted", (main) => {
            removeActive();
            const next = main.animator.targetIdx || 0;
            addActive(main.track.absToRel(next));
            slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
          });
        });
      };
    }

    function sliderControlNavigation(self) {
      const arrowLeft = document.querySelector(
        '[data-arrow="image-gallery-arrow-left"]'
      );
      const arrowRight = document.querySelector(
        '[data-arrow="image-gallery-arrow-right"]'
      );

      function markup() {
        arrowMarkup();
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

    var slider = new KeenSlider("#image-gallery-slider", {}, [
      sliderControlNavigation,
    ]);
    var thumbnails = new KeenSlider(
      "#image-gallery-thumbnails",
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(slider)]
    );
  })(jQuery);
});
