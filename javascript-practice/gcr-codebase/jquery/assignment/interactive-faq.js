// FAQ behavior is grouped in one document-ready handler.
$(function () {
  $(".question").on("click", function () {
    $(this).next(".answer").slideToggle(200);
  }).on("mouseenter", function () {
    $(this).css("color", "#1678a9");
  }).on("mouseleave", function () {
    $(this).css("color", "");
  }).on("dblclick", function () {
    $(".answer").slideUp(200);
  });

  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").find(".question").addClass("focused");
  }).on("blur", function () {
    $(this).closest(".faq-item").find(".question").removeClass("focused");
  });
});
