document.body.style.backgroundColor = "#Ba9de8";
document.body.style.backgroundImage = "url('images/back.jpg')";

// Login users
$(document).ready(function() {
	$("#login-btn").click(function(event) {
		event.preventDefault(); // prevent form from submitting
		var username = $("#username").val();
		if (username != "") {
			var contactUs = $(".navbar-nav").find("li:eq(1)");
			var loginLogout = $(".navbar-nav").find("li:eq(2)");
			var newNavItem = $("<li class='nav-item'><span class='navbar-text'>" + username + "</span></li>");
			newNavItem.insertBefore(loginLogout);
			contactUs.after("<li class='nav-item'><span class='navbar-text'>|</span></li>");
		}
	});
});
