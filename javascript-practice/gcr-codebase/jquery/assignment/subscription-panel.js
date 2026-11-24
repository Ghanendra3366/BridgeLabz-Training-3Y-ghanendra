// jQuery .on()/.off() dynamically control topic notification handlers.
$(function () {
  const showMessage = (message) => $(".message").text(message).hide().fadeIn(150);

  function attachTopicHandler($topic) {
    $topic.on("click.subscription", function (event) {
      if ($(event.target).is(".removeTopic")) return;
      $(this).toggleClass("subscribed");
      showMessage(`${$(this).data("topic")} subscription updated.`);
    });
  }

  $(".topic").each(function () { attachTopicHandler($(this)); });

  $("#subscribeAll").on("click", function () {
    $(".topic").addClass("subscribed");
    showMessage("Notifications enabled for all topics.");
  });
  $("#unsubscribeAll").on("click", function () {
    $(".topic").removeClass("subscribed").off("click.subscription");
    showMessage("Notifications disabled and topic handlers detached.");
  });

  $("#topics").on("click", ".removeTopic", function () {
    const $topic = $(this).closest(".topic");
    $topic.off("click.subscription").remove();
    showMessage("Subscription removed.");
  });

  $("#topicForm").on("submit", function (event) {
    event.preventDefault();
    const name = $("#newTopic").val().trim();
    if (!name) return;
    const $topic = $(`<article class="topic"><span>${$('<div>').text(name).html()}</span><button class="removeTopic" type="button">Remove</button></article>`);
    $topic.attr("data-topic", name);
    $("#topics").append($topic);
    attachTopicHandler($topic);
    $("#newTopic").val("");
    showMessage(`${name} subscription added.`);
  });
});
