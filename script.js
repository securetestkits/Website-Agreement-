document.addEventListener('DOMContentLoaded', function () {
  const acceptButton = document.getElementById('acceptButton');
  const acceptanceNotification = document.getElementById('acceptanceNotification');
  const signature = document.getElementById('signature');
  const priceSlider = document.getElementById('priceSlider');
  const negotiatePrice = document.getElementById('negotiatePrice');
  const finalPriceDisplay = document.getElementById('finalPriceDisplay');
  const emailCheckbox = document.getElementById('emailCheckbox');

  acceptButton.addEventListener('click', function () {
    acceptButton.disabled = true;
    acceptanceNotification.classList.remove('hidden');
    
    // Send email if checkbox is checked
    if (emailCheckbox.checked) {
      sendEmailConfirmation();
    }
  });

  // Update price display on slider change
  priceSlider.addEventListener('input', function () {
    negotiatePrice.textContent = `$${priceSlider.value}`;
    calculateFinalPrice();
  });

  // Initial final price calculation
  calculateFinalPrice();

  // Function to calculate and display final price
  function calculateFinalPrice() {
    const finalPrice = parseInt(priceSlider.value) + 10; // Add a base amount
    finalPriceDisplay.textContent = `$${finalPrice}`;
  }

  // Function to simulate sending an email confirmation
  function sendEmailConfirmation() {
    // Simulate sending an email (replace with actual email functionality)
    console.log('Email sent: Agreement Confirmation');
  }
});
