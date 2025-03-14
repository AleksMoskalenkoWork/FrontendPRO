let startConditionValue = 1;
let getUserValue;

getUserValue = parseInt(prompt('Введіть ціле число'));

if (getUserValue <= startConditionValue) {
  alert('Число не є простим.');
} else {
  for (let i = 2; i <= getUserValue; i++) {
    if (getUserValue % i === 0) {
      alert('Число є простим.');
      break;
    }
  }
}
