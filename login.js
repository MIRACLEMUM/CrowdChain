function validateLoginForm() {
    const form = document.getElementById('login-form');
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    
    if (!email.value || !password.value) {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Check if credentials are correct (using localStorage here for demo purposes)
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    if (email.value === storedEmail && password.value === storedPassword) {
      // Redirect to the landing page after successful login
      window.location.href = "landing.html"; // Update with your landing page URL
    } else {
      alert("Invalid login credentials.");
    }
  
    return false; // Prevent form submission
  }
  