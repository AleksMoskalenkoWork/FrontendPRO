class Calculator {
  constructor() {}
  add(a, b) {
    const result = a + b;
    alert(`${a}+${b} = ${result}`);
  }
  subtract(a, b) {
    const result = a - b;
    alert(`${a}-${b} = ${result}`);
  }
  multiply(a, b) {
    const result = a * b;
    alert(`${a}*${b} = ${result}`);
  }
  divide(a, b) {
    if (b === 0) {
      alert('Ділення на нуль не можливе.');
    } else {
      const result = a / b;
      alert(`${a}/${b} = ${result}`);
    }
  }
}

const calc = new Calculator();

calc.add(5, 3); // 8

calc.subtract(10, 4); // 6

calc.multiply(3, 6); // 18

calc.divide(8, 2); // 4
