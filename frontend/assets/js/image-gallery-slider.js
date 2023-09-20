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
    var slider = new KeenSlider("#image-gallery-slider");
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
