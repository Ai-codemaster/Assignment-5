// Donate and History button edit
document
  .getElementById("show-donation-form")
  .addEventListener("click", function () {
    showSectionById("donation-form");
  });

document
  .getElementById("show-donation-history")
  .addEventListener("click", function () {
    showSectionById("donation-history");
  });

// click button and change background

document
  .getElementById("show-donation-history")
  .addEventListener("click", function () {
    document
      .getElementById("show-donation-history")
      .classList.add("bg-[--btn-bg]");
    document
      .getElementById("show-donation-history")
      .classList.add("hover:bg-[--btn-bg]");
    document
      .getElementById("show-donation-history")
      .classList.remove("bg-white");
    document
      .getElementById("show-donation-history")
      .classList.remove("hover:bg-white");
    document.getElementById("show-donation-form").classList.add("bg-white");
    document
      .getElementById("show-donation-form")
      .classList.add("hover:bg-white");
    document
      .getElementById("show-donation-form")
      .classList.remove("bg-[--btn-bg]");
    document
      .getElementById("show-donation-form")
      .classList.remove("hover:bg-[--btn-bg]");
  });

document
  .getElementById("show-donation-form")
  .addEventListener("click", function () {
    document
      .getElementById("show-donation-form")
      .classList.add("bg-[--btn-bg]");
    document
      .getElementById("show-donation-form")
      .classList.add("hover:bg-[--btn-bg]");
    document
      .getElementById("show-donation-history")
      .classList.remove("bg-[--btn-bg]");
    document
      .getElementById("show-donation-history")
      .classList.remove("hover:bg-[--btn-bg]");
    document.getElementById("show-donation-history").classList.add("bg-white");
    document
      .getElementById("show-donation-history")
      .classList.add("hover:bg-white");
    document.getElementById("show-donation-form").classList.add("bg-white");
    document
      .getElementById("show-donation-form")
      .classList.remove("hover:bg-white");
    document.getElementById("show-donation-form").classList.remove("bg-white");
  });

// Blog button click

document.getElementById("block-page").addEventListener("click", function () {
  window.location.href = "/blog.html";
});

// Noakhali Donate Button
document
  .getElementById("donate-noakhali")
  .addEventListener("click", function () {
    const donateAmountNoakhali = getInputFieldValueById(
      "donate-amount-noakhali"
    );
    const balance = getTextFieldValueById("account-balance");
    const amountNoakhali = getTextFieldValueById("amount-noakhali");

    if (
      isNaN(donateAmountNoakhali) ||
      donateAmountNoakhali <= 0 ||
      donateAmountNoakhali > balance
    ) {
      document.getElementById("popup").classList.add("hidden");
    } else {
      document.getElementById("popup").classList.remove("hidden");
    }
  });

// Close Confirmation button click and close the popup

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

// Feni Donate Button
document.getElementById("donate-feni").addEventListener("click", function () {
  const donateAmountFeni = getInputFieldValueById("donate-amount-feni");
  const balance = getTextFieldValueById("account-balance");
  const amountFeni = getTextFieldValueById("amount-feni");

  if (
    isNaN(donateAmountFeni) ||
    donateAmountFeni <= 0 ||
    donateAmountFeni > balance
  ) {
    document.getElementById("popup").classList.add("hidden");
  } else {
    document.getElementById("popup").classList.remove("hidden");
  }
});

// Close Confirmation button click and close the popup

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

// Quota Donate Button
document.getElementById("donate-quota").addEventListener("click", function () {
  const donateAmountQuota = getInputFieldValueById("donate-amount-quota");
  const balance = getTextFieldValueById("account-balance");
  const amountQuota = getTextFieldValueById("amount-quota");

  if (
    isNaN(donateAmountQuota) ||
    donateAmountQuota <= 0 ||
    donateAmountQuota > balance
  ) {
    document.getElementById("popup").classList.add("hidden");
  } else {
    document.getElementById("popup").classList.remove("hidden");
  }
});

// Close Confirmation button click and close the popup

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

// donate money noakhali

document
  .getElementById("donate-noakhali")
  .addEventListener("click", function () {
    const donateAmountNoakhali = getInputFieldValueById(
      "donate-amount-noakhali"
    );
    const balance = getTextFieldValueById("account-balance");
    const amountNoakhali = getTextFieldValueById("amount-noakhali");

    if (isNaN(donateAmountNoakhali) || donateAmountNoakhali <= 0) {
      alert("Invalid Donation Amount");
      return;
    } else if (donateAmountNoakhali > balance) {
      alert("You have not enough money");
      return;
    }

    const newAccountBalance = balance - donateAmountNoakhali;
    const newAmountNoakhali = amountNoakhali + donateAmountNoakhali;

    document.getElementById("account-balance").innerText = newAccountBalance;
    document.getElementById("amount-noakhali").innerText = newAmountNoakhali;
  });

// donate money feni

document.getElementById("donate-feni").addEventListener("click", function () {
  const donateAmountFeni = getInputFieldValueById("donate-amount-feni");
  const balance = getTextFieldValueById("account-balance");
  const amountFeni = getTextFieldValueById("amount-feni");

  if (isNaN(donateAmountFeni) || donateAmountFeni <= 0) {
    alert("Invalid Donation Amount");
    return;
  } else if (donateAmountFeni > balance) {
    alert("You have not enough money");
    return;
  }

  const newAccountBalance = balance - donateAmountFeni;
  const newAmountFeni = amountFeni + donateAmountFeni;

  document.getElementById("account-balance").innerText = newAccountBalance;
  document.getElementById("amount-feni").innerText = newAmountFeni;
});

// donate money quota

document.getElementById("donate-quota").addEventListener("click", function () {
  const donateAmountQuota = getInputFieldValueById("donate-amount-quota");
  const balance = getTextFieldValueById("account-balance");
  const amountQuota = getTextFieldValueById("amount-quota");

  if (isNaN(donateAmountQuota) || donateAmountQuota <= 0) {
    alert("Invalid Donation Amount");
    return;
  } else if (donateAmountQuota > balance) {
    alert("You have not enough money");
    return;
  }

  const newAccountBalance = balance - donateAmountQuota;
  const newAmountQuota = amountQuota + donateAmountQuota;

  document.getElementById("account-balance").innerText = newAccountBalance;
  document.getElementById("amount-quota").innerText = newAmountQuota;
});
