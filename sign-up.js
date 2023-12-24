const signUpButton = document.querySelector("#create-account");
const signUpForm = document.querySelector("#info-form");

// Check password logic in the submit
const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-confirm");
const passwordText = document.querySelector("#password-text");
const errorMessage = document.createElement("div");
errorMessage.style.fontSize = "0.8rem";
errorMessage.style.color = "red";
passwordText.appendChild(errorMessage);

signUpButton.addEventListener("click", (event) => {
  // Prevent the default form submission until you verify the inputs
  event.preventDefault();

  // Check if all fields are valid
  if (signUpForm.checkValidity()) {
    if (password1.value === password2.value) {
      signUpForm.submit();
      errorMessage.textContent = "";
    } else {
      // Passwords do not match, alert or display the error
      errorMessage.textContent = "* Passwords do not match";
      password1.classList.add("error");
      password2.classList.add("error");
    }
  } else {
    signUpForm.reportValidity();
  }
});
