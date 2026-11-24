// Keyup filtering searches course text case-insensitively.
$(function () {
  function filterCourses(query) {
    const normalizedQuery = query.trim().toLowerCase();
    let matches = 0;
    $(".course").each(function () {
      const $course = $(this);
      const text = $course.text();
      $course.removeClass("match").css("background", "");
      const isMatch = normalizedQuery === "" || text.toLowerCase().includes(normalizedQuery);
      $course.toggle(isMatch);
      if (isMatch) {
        matches += 1;
        if (normalizedQuery) $course.addClass("match").css("background", "#fff4a8");
      }
    });
    $("#courseCount").text(`${matches} course(s) matched.`);
  }

  $("#courseSearch").on("keyup", function () { filterCourses($(this).val()); });
  $("#clearSearch").on("click", function () {
    $("#courseSearch").val("");
    filterCourses("");
  });
  filterCourses("");
});
