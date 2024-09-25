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
    changeBtnBgById("show-donation-history", "show-donation-form");
  });

document
  .getElementById("show-donation-form")
  .addEventListener("click", function () {
    changeBtnBgById("show-donation-form", "show-donation-history");
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

    // Add donation history

    const currentDate = new Date();

    const div = document.createElement("div");
    div.innerHTML = `
          <div class="p-6 sm:px-16 mb-4 bg-gray-100 rounded-xl border-gray-400 border-[1px] text-center inline-block">
            <h2 class="font-bold text-sm md:text-base">
              ${donateAmountNoakhali} Taka is Donate for Flood at Noakhali,
              Bangladesh
            </h2">
            <p class="text-xs md:text-sm text-[--text-light-2] font-light mt-2">${currentDate}</p>
          </div>
        `;

    document.getElementById("history-container").appendChild(div);
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
