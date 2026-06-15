document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const successMessage = document.getElementById("formSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    // Reset errors
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove("input-error");
    });

    [nameError, emailError, messageError].forEach((error) => {
      error.classList.remove("visible");
    });

    successMessage.classList.add("d-none");

    // Name validation
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("input-error");
      nameError.classList.add("visible");
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("input-error");
      emailError.classList.add("visible");
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      messageInput.classList.add("input-error");
      messageError.classList.add("visible");
      isValid = false;
    }

    // Success
    if (isValid) {
      successMessage.classList.remove("d-none");

      form.reset();

      window.scrollTo({
        top: form.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});