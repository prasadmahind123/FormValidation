document.getElementById("validationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  validateForm();
});

function validateForm() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  let isValid = true;

  if (name.length < 5) {
    document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
    isValid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (!/^\d{10}$/.test(phone) || phone === "1234567890") {
    document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
    document.getElementById("passwordError").textContent = "Password must be strong (not 'password' or name and at least 8 characters).";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("validationForm").reset();
  }
}