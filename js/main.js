(function () {
  "use strict";

  const $hauntedText = $("[data-haunted-text]");
  const maxDuration = 2000;
  const maxDelay = 500;
  const minDuration = maxDuration - maxDelay;

  $hauntedText.blast({
    delimiter: "character",
  });

  setTimeout(function () {
    $hauntedText.find(".blast").each(function (i, el) {
      const $el = $(el);

      const duration = getRandomValue(minDuration, maxDuration);
      const delay = maxDuration - duration;
      const blur = getRandomValue(2, 10);

      // From
      $el.velocity(
        {
          opacity: 0,
          blur: blur,
        },
        {
          duration: 0,
        }
      );

      // To
      $el.velocity(
        {
          opacity: 1,
          blur: 0,
        },
        {
          duration: duration,
          delay: delay,
          ease: [250, 0],
        }
      );
    });

    $hauntedText.css({ visibility: "visible" });
  }, 500);

  const getRandomValue = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
})();
