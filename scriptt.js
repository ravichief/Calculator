const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let operands = [];
let operators = [];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === 'C') {
      clearDisplay();
    }
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operators.push(value);
      operands.push(parseFloat(display.textContent));
      display.textContent = '';
    }
    else if (value === '=') {
      operands.push(parseFloat(display.textContent));
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
  operands = [];
  operators = [];
}

function handleEquals() {
  let result = operands[0];
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const operand = operands[i + 1];
    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
    }
  }
  display.textContent = result;
  operands = [result];
  operators = [];
}
