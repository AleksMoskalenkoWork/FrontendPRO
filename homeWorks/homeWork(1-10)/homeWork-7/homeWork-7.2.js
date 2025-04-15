function getUserValue() {
  const userValue = prompt('Type your parameter!');
  const conditionForIncorrectUserValue =
    userValue === null || userValue === '' || isNaN(userValue);

  if (conditionForIncorrectUserValue) {
    alert('Incorrect value. Please try again later.');
  } else {
    const userValueNext = prompt('Type your next parameter!');
    const conditionForIncorrectUserValueNext =
      userValueNext === null || userValueNext === '' || isNaN(userValueNext);

    if (conditionForIncorrectUserValueNext) {
      alert('Incorrect value. Please try again later.');
    } else {
      accNumbersCarry(userValue)(userValueNext);
    }
  }
}

function accNumbersCarry(ParamsA) {
  let convertParamsAToInt = parseInt(ParamsA);
  return function (ParamsB) {
    let convertParamsBToInt = parseInt(ParamsB);
    const total = convertParamsAToInt + convertParamsBToInt;

    return alert(`Result is: ${total}`);
  };
}

getUserValue();
