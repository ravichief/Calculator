const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let operand1 = null;
let operator = null;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === 'C') {
      clearDisplay();
    } 
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operand1 = parseFloat(display.textContent);
      operator = value;
      display.textContent = '';
    } 
    else if (value === '=') {
      handleEquals();
    } 
    else {
      appendValue(value);
    }
  });
});
function appendValue(value) {
  display.textContent += value;
}
function clearDisplay() {
  display.textContent = '';
  operand1 = null;
  operator = null;
}
function handleEquals() {
  if (!operator) {
    return;
  }
  const operand2 = parseFloat(display.textContent);
  const result = calculateResult(operand1, operator, operand2);
  display.textContent = result;
  operand1 = null;
  operator = null;
}
function calculateResult(operand1, operator, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
  }
}
