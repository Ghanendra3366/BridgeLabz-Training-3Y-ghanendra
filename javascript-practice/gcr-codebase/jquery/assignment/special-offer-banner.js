// Banner controls demonstrate hide/show, slide, and fade jQuery effects.
$(function () {
  $("#hideBanners").on("click", () => $(".banner").hide());
  $("#showBanners").on("click", () => $(".banner").show());
  $("#slideUp").on("click", () => $(".banner").slideUp(300));
  $("#slideDown").on("click", () => $(".banner").slideDown(300));
  $("#fadeOut").on("click", () => $(".banner").fadeOut(400));
  $("#fadeIn").on("click", () => $(".banner").fadeIn(400));

  let bannerIndex = 0;
  setInterval(function () {
    const $banners = $(".banner");
    $banners.fadeOut(400);
    setTimeout(function () {
      bannerIndex = (bannerIndex + 1) % $banners.length;
      $banners.eq(bannerIndex).fadeIn(500);
    }, 450);
  }, 5000);
});
