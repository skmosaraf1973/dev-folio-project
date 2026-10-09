const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent =
      "Name is required.";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").textContent =
      "Message must contain at least 10 characters.";
    valid = false;
  }

  if (valid) {
    console.log("Form submitted successfully!");
    document.getElementById("successMessage").textContent =
      "Form submitted successfully!";
    form.reset();
  }
});