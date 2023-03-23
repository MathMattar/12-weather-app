const errorElement = document.getElementById("search-error");

export function showError(message) {
  errorElement.textContent = message;
  errorElement.classList.add("--visible");
}

export function hideError() {
  errorElement.textContent = "";
  errorElement.classList.remove("--visible");
}
