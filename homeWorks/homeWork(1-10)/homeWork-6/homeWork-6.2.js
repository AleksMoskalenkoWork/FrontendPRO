let averageArithmeticArray = [1, 2, 3, {}, [], '0', null];

function calculatesAverageArithmetic(arrayOfElements) {
  let result = null;
  let countOfNumbers = [];
  let totalResult = null;

  for (let i = 0; i < arrayOfElements.length; i++) {
    let charFromUserValue = arrayOfElements[i];

    if ((typeof charFromUserValue === 'number') & !isNaN(charFromUserValue)) {
      countOfNumbers.push(charFromUserValue);
      result += charFromUserValue;

      totalResult = result / countOfNumbers.length;
    }
  }

  return countOfNumbers.length
    ? alert(`Середнє арефметичне дорівнює: \n${totalResult}`)
    : alert(`Середнє арефметичне дорівнює нулю!`);
}

calculatesAverageArithmetic(averageArithmeticArray);
