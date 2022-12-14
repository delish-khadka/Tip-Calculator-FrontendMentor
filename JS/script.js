const billAmount = document.querySelector("#bill-input");
const numberOfPeople = document.querySelector("#number-of-people");
const customTipPercentage = document.querySelector(".tip-input");
const billTipAmount = document.querySelector("#tip-amount");
const billTotalPerPerson = document.querySelector("#total-amount");
const resetButton = document.querySelector("#reset-button");
const buttons = document.querySelectorAll("#tip-buttons");

// alert("yoo");
// console.log(customTipPercentage);

//Calculate Tip When Click On Tip Percentage Button
buttons.forEach(tipOnButtonClick);
function tipOnButtonClick(button) {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);
    // console.log(tipvalue);

    if (billAmount.value === "") return;
    if (numberOfPeople.value === "") numberOfPeople.value = 1;

    calculateTip(parseFloat(billAmount.value), parseInt(tipvalue), parseInt(numberOfPeople.value));
  });
}
// buttons.forEach((button) => {
// button.addEventListener("click", (e) => {
//   let tipvalue = e.target.innerText;
//   tipvalue = tipvalue.substr(0, tipvalue.length - 1);

//   if (billAmount.value === "") return;
//   if (numberOfPeople.value === "") numberOfPeople.value = 1;

//   calculateTip(parseFloat(billAmount.value), parseInt(tipvalue), parseInt(numberOfPeople.value));
// });
// });

//Calculate Tip When User Give Custom Tip Percentage Input
customTipPercentage.addEventListener("input", (e) => {
  if (billAmount.value === "" || customTipPercentage.value === "") {
    resetEverything();
    return;
  }

  if (numberOfPeople.value === "") numberOfPeople.value = 1;

  calculateTip(parseFloat(billAmount.value), parseFloat(e.target.value), parseInt(numberOfPeople.value));
});

//Calculate Tip
function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
}

//Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}
