const operationsObject = {
  "+": addition,
  "-": subtraction,
  "×": multiplication,
  "÷": division,
};

const text = document.querySelector("h2");
let pageTitle = document.querySelector("h1");
let isTyping = false;
let firstInput = 0;
let secondInput = 0;
let operation = null;
let bodyList = document.querySelector("body").classList;
const inputEl = document.getElementById("inputValue");
const allButtons = document.querySelectorAll("button");
const clearButton = document.getElementById("clearButton");

function calculate(operator, button) {
  allButtons.forEach((btn) => btn.classList.remove("buttonPressed"));
  isTyping = false;
  if (operator === "=" && operation) {
    const operationCheck = operationsObject[operation];
    secondInput = parseFloat(inputEl.textContent.replace(",", "."));
    console.log(operationCheck);

    if (operationCheck) {
      operationCheck();
    }
  } else {
    button.classList.add("buttonPressed");
    firstInput = parseFloat(inputEl.textContent.replace(",", "."));
    operation = operator;

    console.log("first value", firstInput, operation);
  }
}
function inputNumber(number) {
  clearButton.textContent = "C";
  if (!isTyping) {
    console.log(inputEl.textContent.length);
    inputEl.textContent = number;
    isTyping = true;
    return;
  }
  if (inputEl.textContent.length >= 9) return;
  if (inputEl.textContent.length > 5)
    inputEl.style.fontSize = `${60 - (inputEl.textContent.length - 5) * 4}px`;
  inputEl.textContent += number;
}
function clearEntry() {
  if (clearButton.textContent === "AC") clearButton.textContent = "C";
  clearButton.textContent = "AC";
  inputEl.textContent = 0;
  firstInput = 0;
  secondInput = 0;
  operation = null;
  isTyping = false;
  allButtons.forEach((btn) => btn.classList.remove("buttonPressed"));
  inputEl.style.fontSize = "60px";
}
function additiveInverse() {
  inputEl.textContent = String(
    -1 * parseFloat(inputEl.textContent.replace(",", ".")),
  ).replace(".", ",");
}

function decimal() {
  if (!inputEl.textContent.includes(",")) inputEl.textContent += ",";
}
function percentile() {
  inputEl.textContent = String(parseFloat(inputEl.textContent) / 100).replace(
    ".",
    ",",
  );
}

function addition() {
  inputEl.textContent = String(firstInput + secondInput).replace(".", ",");

  console.log("sum is", inputEl.textContent);
}
function subtraction() {
  inputEl.textContent = String(firstInput - secondInput).replace(".", ",");

  console.log("difference is", inputEl.textContent);
}
function multiplication() {
  inputEl.textContent = String(firstInput * secondInput).replace(".", ",");

  console.log("product is", inputEl.textContent);
}
function division() {
  inputEl.textContent = String(firstInput / secondInput).replace(".", ",");

  console.log("quotient is", inputEl.textContent);
}
