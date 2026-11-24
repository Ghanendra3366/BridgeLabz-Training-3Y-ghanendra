// Append, prepend, before, after, remove, and keyword highlighting share one handler block.
$(function () {
  let postNumber = 1;

  $("#addPost").on("click", function () {
    const $post = $(`<article class="post" data-title="New Post ${postNumber}"><h2>New Post ${postNumber}</h2><p>Fresh content ready for review.</p></article>`);
    $post.before(`<span class="tag">draft</span>`).before(`<span class="tag">new</span>`);
    $("#postList").append($post);
    postNumber += 1;
  });

  $("#prependPost").on("click", function () {
    const $featured = $(`<article class="post featured"><h2>Featured: Monthly Roundup</h2><p>The month’s most useful JavaScript and design ideas.</p></article>`);
    $featured.after(`<span class="tag">featured</span>`);
    $("#postList").prepend($featured);
  });

  $("#removePost").on("click", function () {
    $("#postList .post").last().remove();
  });

  $(".post").each(function () {
    $(this).filter(":contains('JavaScript')").addClass("keyword-match");
  });
});
