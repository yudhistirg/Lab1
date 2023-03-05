/*
Name: Yudhistir Gnawali and Riya Panchal
  Website: jQuery & Form Validation
  Date: 3/4/2023
  Description: Created for a course requirement of webd6201 at durham college.
  Github: https://github.com/yudhistirg/Lab2
*/

class User 
{
	constructor(firstName, lastName, email, password) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.email = email;
	  this.password = password;
	}
}

// function for the validating the user input
$(document).ready(function() 
{
	// Hide error message div
	$('#ErrorMessage').hide();

	// Handle register form submission
	$('#registerBtn').click(function(event) 
	{
	
		event.preventDefault(); // Prevent default form submission behavior
	
	  	// Get form inputs
	  	let firstName = $('#firstName').val();
	  	let lastName = $('#lastName').val();
	  	let email = $('#email').val();
	  	let password = $('#password').val();
	  	let confirmPassword = $('#confirmPassword').val();
		
	  	// Check input validity
	  	let validInputs = true;
	  	if (firstName.length < 2 || lastName.length < 2) 
		{
			$('#ErrorMessage').text('First and last name must be at least 2 characters long.');
			validInputs = false;
	  	}
	  	else if (email.length < 8 || email.indexOf('@') === -1) 
		{
			$('#ErrorMessage').text('Email must be at least 8 characters long and contain an "@" symbol.');
			validInputs = false;
	  	}
	  	else if (password.length < 6) 
		{
			$('#ErrorMessage').text('Passwords must be at least 6 characters long.');
			validInputs = false;
	  	}
		else if (password !== confirmPassword)
		{
			$('#ErrorMessage').text('Password does not match!!! ');
			validInputs = false;
		}


	  
	  	// If all inputs are valid, create user and clear form
	  	if (validInputs) 
		{
			let user = new User(firstName, lastName, email, password);
			console.log("First Name: " + firstName + "cLast Name: " + lastName + " Email: " + email + " Password: " + "ENCRYPTED");
			$('#registerForm')[0].reset();
	  	}
	  
	  	// Show error message div if necessary
	  	if (!validInputs) 
		{
			$('#ErrorMessage').show();
	  	} 
		else 
		{
			$('#ErrorMessage').hide();
	  	}

      
	});
});

