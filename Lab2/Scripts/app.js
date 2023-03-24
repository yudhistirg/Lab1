// User class definition
class User {
  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

// jQuery document ready function
$(function() {
  // Hide error message div on page load
  $("#ErrorMessage").hide();

  // Bind submit event to register form
  $("#registerForm").on("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form inputs
    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let confirmPassword = $("#confirmPassword").val().trim();

    // Validate first name and last name inputs
    if (firstName.length < 2 || lastName.length < 2) {
      $("#ErrorMessage").text("First name and last name must be at least 2 characters long.").show();
      return;
    }

    // Validate email input
    if (email.length < 8 || !email.includes("@")) {
      $("#ErrorMessage").text("Email must be at least 8 characters long and contain an '@' symbol.").show();
      return;
    }

    // Validate password inputs
    if (password.length < 6) {
      $("#ErrorMessage").text("Password must be at least 6 characters long.").show();
      return;
    }

    if (password !== confirmPassword) {
      $("#ErrorMessage").text("Passwords do not match.").show();
      return;
    }

    // If form inputs are valid, create new user object
    let newUser = new User(firstName, lastName, email, password);

    // Do something with newUser object (e.g. send to server via AJAX)

    // Show success message
    $("#SuccessMessage").text("Registration successful!").show();
  });
});
