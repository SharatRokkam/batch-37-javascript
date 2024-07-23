document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    //We wont allow the form to auto submit
    e.preventDefault();

    // Clear previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validation patterns
    const usernamePattern = /^[a-zA-Z0-9_]{3,}$/;
    // /^[a-zA-Z0-9_]{3,}$/

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // /^[^\s@]+@[^\s@0-9]+\.[^\s@0-9]+$/

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   


    let isValid = true;

    // Validate username
    if (!usernamePattern.test(username)) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 3 characters long and contain only letters, numbers, and underscores.";
      document.getElementById("usernameError").style.display = "block";
      isValid = false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validate password
    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long and contain at least one number, one uppercase, and one lowercase letter.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Submit the form or handle the registration process
      alert("Registration successful!");
    }
  });
