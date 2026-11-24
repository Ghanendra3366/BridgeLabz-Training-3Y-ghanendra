// jQuery initializes greeting behavior after the document is ready.
$(function () {
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  $("#greeting").text(`${timeGreeting}, Visitor!`);

  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Success begins with the courage to start.");
  });

  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").toggle();
  });

  $("#greeting").on("click", function () {
    alert("Welcome! Your personalized greeting is active.");
  });
});
