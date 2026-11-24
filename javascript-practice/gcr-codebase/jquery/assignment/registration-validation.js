// Live jQuery validation checks required, format, uniqueness, and password rules.
$(function () {
  const registeredEmails = ["alex@example.com", "mina@example.com"];

  function validateRegistration() {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();
    let valid = true;

    $("input").css("border", "1px solid #9baaa3");
    $(".error").text("");

    if (!name) {
      $("#name").css("border", "2px solid #b42318");
      $("[data-error='name']").text("Name is required.");
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#email").css("border", "2px solid #b42318");
      $("[data-error='email']").text("Enter a valid email format.");
      valid = false;
    } else if (registeredEmails.includes(email.toLowerCase())) {
      $("#email").css("border", "2px solid #b42318");
      $("[data-error='email']").text("This email is already registered.");
      valid = false;
    }
    if (password.length < 8) {
      $("#password").css("border", "2px solid #b42318");
      $("[data-error='password']").text("Password must be at least 8 characters.");
      valid = false;
    }
    return valid;
  }

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();
    if (validateRegistration()) {
      $("#registrationStatus").removeClass("error").addClass("success").text("Registration completed successfully.");
    } else {
      $("#registrationStatus").removeClass("success").addClass("error").text("Please correct the highlighted fields.");
    }
  });

  $("#registrationForm input").on("input", function () {
    validateRegistration();
  });
});
