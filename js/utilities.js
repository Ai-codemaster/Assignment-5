// Donate and History button

function showSectionById(id) {
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("donation-history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// input field and text field value string to number convert function

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
