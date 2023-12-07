function checkValidInput(value) {
  const valid = value.trim() !== "";

  return valid;
}

function showError(message) {
  const errorMess = document.querySelector("span.error");
  errorMess.textContent = message;
  errorMess.classList.add("active");
}

function clearError(message) {
  const errorMess = document.querySelector("span.error");
  errorMess.textContent = message;
  errorMess.classList.remove("active");
}
export { checkValidInput, showError, clearError };
