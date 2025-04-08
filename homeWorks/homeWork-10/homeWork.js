function sumInput() {
  let numbersArray = [];
  let inputValue;
  let inputValueIsNumber;
  let result;

  while (true) {
    inputValue = prompt('Enter your number:');
    inputValueIsNumber = Number(inputValue);

    if (
      inputValue === null ||
      inputValue === '' ||
      inputValueIsNumber === NaN
    ) {
      break;
    }

    numbersArray.push(inputValueIsNumber);
  }

  result = numbersArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return alert(`Sum of numbers from array is: ${result}`);
}

sumInput();
