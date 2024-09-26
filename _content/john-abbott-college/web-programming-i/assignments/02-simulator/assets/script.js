const form = document.getElementById("contactForm");
const mainCheckbox = document.getElementById("mainCheckbox");
const middleCheckboxes = document.querySelectorAll(".middleCheckbox");
const addressField = document.getElementById("address");
const dateField = document.getElementById("tourDate");
const newsletterYes = document.getElementById("newsletterYes");
const newsletterNo = document.getElementById("newsletterNo");

mainCheckbox.addEventListener("change", function () {
  middleCheckboxes.forEach((checkbox) => {
    if (this.checked) {
      checkbox.checked = false; // Uncheck all checkboxes
      checkbox.disabled = true; // Disable all checkboxes
    } else {
      checkbox.disabled = false; // Re-enable all checkboxes
    }
  });
});

form.addEventListener("submit", function (event) {
  // Check if address is provided
  if (!addressField.value) {
    alert("Please provide an address.");
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check if touring date is provided
  if (!dateField.value) {
    alert("Please provide a touring date.");
    event.preventDefault(); // Prevent form submission
    return;
  }

  if (newsletterYes.checked) {
    form.action = "http://10.101.0.12:8080/success-newsletter";
  } else if (newsletterNo.checked) {
    form.action = "http://10.101.0.12:8080/success-no-newsletter";
  }
});
