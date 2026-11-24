// Traversal methods demonstrate parent, children, find, siblings, and next.
$(function () {
  $(".employee").on("mouseenter", function () {
    $(this).next(".contact").stop(true).slideDown(100);
  }).on("mouseleave", function () {
    $(this).next(".contact").stop(true).slideUp(100);
  });

  $(".employee[data-manager]").on("click", function () {
    $(".employee").removeClass("report");
    $(this).siblings(".employee").addClass("report");
  });

  $(".department-title").on("click", function () {
    $(this).parent(".department").children(".employee").toggleClass("highlight");
  });

  $(".employee").on("dblclick", function () {
    $(this).siblings(".employee").toggleClass("highlight");
  });

  $("#toggleTeam").on("click", function () {
    const $team = $(".department");
    $team.find(".employee").slideToggle(200);
  });
});
