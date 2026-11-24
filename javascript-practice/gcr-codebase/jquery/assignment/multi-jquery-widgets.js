// noConflict preserves Version 1 under jq112 and leaves Version 2 under jQuery.
const jqueryV1 = window.jq112;
const jqueryV2 = window.jQuery;

// Version 1 owns the carousel and active-widget behavior.
jqueryV1(function () {
  let slideIndex = 0;
  jqueryV1(".widget").first().addClass("active");
  setInterval(function () {
    const $slides = jqueryV1(".slide");
    $slides.removeClass("active");
    slideIndex = (slideIndex + 1) % $slides.length;
    $slides.eq(slideIndex).addClass("active");
  }, 3000);
  jqueryV1(".widget").on("click", function () {
    jqueryV1(".widget").removeClass("active");
    jqueryV1(this).addClass("active");
  });
});

// Version 2 owns modal and tooltip behavior through its own alias.
jqueryV2(function () {
  jqueryV2("#openModal").on("click", function () { jqueryV2(".modal").fadeIn(200); });
  jqueryV2("#closeModal").on("click", function () { jqueryV2(".modal").fadeOut(200); });
  jqueryV2(".widget").on("mouseenter", function (event) {
    const $tooltip = jqueryV2(".tooltip-text");
    $tooltip.text(jqueryV2(this).attr("data-tooltip")).css({ left: event.pageX + 10, top: event.pageY + 10 }).show();
  }).on("mouseleave", function () {
    jqueryV2(".tooltip-text").hide();
  });
});
