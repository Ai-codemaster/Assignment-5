// Donate and History button

function showSectionById(id) {
  document.getElementById("donation-form").classList.add("hidden");
  document.getElementById("donation-history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// click button and change background

function changeBtnBgById(donateBtn, historyBtn) {
  document
    .getElementById(donateBtn)
    .classList.add("bg-[--btn-bg]", "hover:bg-[--btn-bg]");
  document
    .getElementById(donateBtn)
    .classList.remove("bg-white", "hover:bg-white");

  document
    .getElementById(historyBtn)
    .classList.add("bg-white", "hover:bg-white");
  document
    .getElementById(historyBtn)
    .classList.remove("bg-[--btn-bg]", "hover:bg-[--btn-bg]");
}

// input field and text field value string to number convert function

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value.trim();
  const inputNumber = Number(inputValue);
  if (isNaN(inputNumber)) {
    return;
  }
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
