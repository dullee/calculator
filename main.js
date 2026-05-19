const operationsObject = {
  "+": addition,
  "-": subtraction,
  "×": multiplication,
  "÷": division,
};

const text = document.querySelector("h2");
let pageTitle = document.querySelector("h1");
let firstInput = 0;
let secondInput = 0;
let operation = null;
let bodyList = document.querySelector("body").classList;
const inputEl = document.getElementById("inputValue");
const allButtons = document.querySelectorAll("button");

function calculate(operator, button) {
  allButtons.forEach((btn) => btn.classList.remove("buttonPressed"));

  if (operator === "=" && operation) {
    const operationCheck = operationsObject[operation];
    secondInput = inputEl.value;
    console.log(operationCheck);
    if (operationCheck) operationCheck();
  } else {
    button.classList.add("buttonPressed");
    firstInput = inputEl.value;
    operation = operator;
    console.log("first value", firstInput, operation);
  }
}

function addition() {
  inputEl.value = Number(firstInput) + Number(secondInput);

  console.log("sum is", inputEl.value);
}
function subtraction() {
  inputEl.value = Number(firstInput) - Number(secondInput);

  console.log("difference is", inputEl.value);
}
function multiplication() {
  inputEl.value = Number(firstInput) * Number(secondInput);

  console.log("product is", inputEl.value);
}
function division() {
  inputEl.value = Number(firstInput) / Number(secondInput);

  console.log("quotient is", inputEl.value);
}
