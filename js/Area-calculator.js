//  a commont function for getting input value
function inputById(inputElemetnId) {
  const inputField = document.getElementById(inputElemetnId);
  const inputFieldString = inputField.value;
  const inputFieldValueNunber = parseFloat(inputFieldString);
  inputField.value = "";
  return inputFieldValueNunber;
}

function setInnerTextElement(ElementTextId, TextArea) {
  const allTextArea = document.getElementById(ElementTextId);
  allTextArea.innerText = TextArea;
}
// this code for aplicable in the triangle card
document.getElementById("tringle-btn").addEventListener("click", function () {
  // step 01: get base input
  const numberBase = inputById("base");
  // step02: get height input value
  const numberHeight = inputById("heigh");
  //step 03: make result
  const areaOfResult = 0.5 * numberBase * numberHeight;

  //   step 04:get resut area
  setInnerTextElement("result-area", areaOfResult);
});

// this code code for aplicable only ractange area cart
document.getElementById("rectangle-btn").addEventListener("click", function () {
  // get the width of rangtangular
  const firstInput = inputById("rectangle-width");
  // get the length of rangtangular
  const secendInput = inputById("rectangle-length");
  // calculation of ractangle value
  const ractangularResult = firstInput * secendInput;
  //   get area field
  setInnerTextElement("resut-field", ractangularResult);
});

document
  .getElementById("parallelogram-button")
  .addEventListener("click", function () {
    const parallelogramBase = inputById("parallelogram-base");
    const parallelogramHeight = inputById("parallelogram-height");
    const parallelogramResultArea =
      0.5 * parallelogramBase * parallelogramHeight;
    setInnerTextElement("parallelogram-text", parallelogramResultArea);
  });