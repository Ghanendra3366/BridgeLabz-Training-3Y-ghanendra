// Run: npx json-server db.json --port 3103
$(function () {
  const apiUrl = "http://localhost:3103/tasks";

  function loadTasks(filter) {
    const params = {};
    if (filter === "low" || filter === "medium" || filter === "high") params.priority = filter;
    if (filter === "completed") params.completed = true;

    $.get(apiUrl, params).done(function (tasks) {
      $("#taskList").empty();
      if (!tasks.length) $("#taskList").html("<p>No tasks found.</p>");
      $.each(tasks, function (_, task) {
        const $task = $(`<article class="task ${task.completed ? "completed" : ""}"><input type="checkbox" ${task.completed ? "checked" : ""}><span>${task.title} · ${task.priority}</span></article>`);
        $task.find("input").on("change", function () {
          const completed = $(this).is(":checked");
          $task.toggleClass("completed", completed);
          $.ajax({ url: `${apiUrl}/${task.id}`, method: "PATCH", contentType: "application/json", data: JSON.stringify({ completed }) });
        });
        $("#taskList").append($task);
      });
    });
  }

  $("#taskFilter").on("change", function () { loadTasks($(this).val()); });
  loadTasks("all");
});
