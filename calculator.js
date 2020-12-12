window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.querySelector('#loan-amount');
  const years = document.querySelector('#loan-years');
  const rate = document.querySelector('#loan-rate');
  amount.value = 350000;
  years.value = 6;
  rate.value = 4;
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let interest = values.rate/ 100 / 12;
  let totalPayments = values.years * 12;

  totalPayments = totalPayments === 0 ? 12 : totalPayments;
  interest = interest === NaN ? 0.0008333333333333334 : interest;

  let n = Math.pow(1 + interest, totalPayments);
  let monthly = (principle * n * interest) / (n - 1);
  return monthly.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = monthly;
}
