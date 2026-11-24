// Product interactions use jQuery event delegation and attribute selectors.
$(function () {
  $(".product").on("click", function () {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  }).on("mouseenter", function () {
    $(this).find(".details").stop(true).slideDown(150);
  }).on("mouseleave", function () {
    $(this).find(".details").stop(true).slideUp(150);
  });

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "★" : "☆");
  });

  $(".product[data-discount]").css("background", "#fff7f3");
  $(".product").on("click", function () {
    if ($(this).attr("data-stock") === "out") alert("This product is currently out of stock.");
  });
});
