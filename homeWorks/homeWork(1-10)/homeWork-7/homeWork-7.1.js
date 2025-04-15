function accNumbers() {
  let total = 0;

  return function accTotalSum(params) {
    let convertParamsToInt = parseInt(params);

    if (params === null || params === '' || isNaN(params)) {
      alert('Incorrect value. Please try again later.');
    } else {
      total += convertParamsToInt;
      alert(`Total sum of numbers is: ${total}`);
    }
  };
}

const paramsAcc = prompt('Enter your number:');
const acc = accNumbers();

acc(paramsAcc);
acc();
acc(3);
