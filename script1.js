window.onload = function () {
  toggleForm('signup'); // or 'login' to show login first
};

function toggleForm(formType) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginTab = document.querySelector('.tabs span:nth-child(1)');
  const signupTab = document.querySelector('.tabs span:nth-child(2)');
  const formTitle = document.getElementById('form-title');

  if (formType === 'login') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    formTitle.textContent = 'Welcome back';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    formTitle.textContent = 'Create an account';
  }
}

function validateLoginForm() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "landing.html";
    }, 500);
  } else {
    alert("Invalid login credentials.");
  }

  return false; // Prevent default form submission
}

function validateSignupForm() {
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  const existingEmail = localStorage.getItem("userEmail");
  if (existingEmail === email) {
    alert("This email is already registered. Please log in.");
    toggleForm('login');
    return false;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Sign-up successful! Please log in.");
  toggleForm('login');

  return false; // Prevent form submission
}

function continueWithGoogle() {
  window.location.href = "https://accounts.google.com/signin";
}

function continueWithFacebook() {
  window.location.href = "https://www.facebook.com/login.php";
}

function togglePassword(passwordId) {
  const passwordField = document.getElementById(passwordId);
  const passwordIcon = document.querySelector(`#${passwordId} + i`);

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
}
