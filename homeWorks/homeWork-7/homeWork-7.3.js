function requestUserValue() {
  const maxIterationValue = 10;
  let lastCorrectValue = null;

  for (let i = 0; i < maxIterationValue; i++) {
    let userValue = prompt('Enter your number more then 100:');
    const conditionForIncorrectUserValue =
      userValue === null || userValue === '' || userValue < 100;

    if (conditionForIncorrectUserValue) {
      alert(
        'Incorrect value. Please try again enter your number more then 100.'
      );
      continue;
    } else {
      lastCorrectValue = userValue;
      alert(`Last valid input: ${lastCorrectValue}`);
      break;
    }
  }
}

requestUserValue();
