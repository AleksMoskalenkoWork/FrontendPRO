let startConditionValue = 1;
let endConditionValue = 100;

let getUserValue;
let result;

getUserValue = parseInt(prompt('Введіть ціле число'));

for (let i = startConditionValue; i <= endConditionValue; i++) {
  result = i * i;
  if (result <= getUserValue && result < endConditionValue) {
    console.log(result);
  } else if (getUserValue === null) {
    alert('Ви скасували дію. Чекаємо на ваше повернення.');
    break;
  } else if (getUserValue === '') {
    alert('Ви не ввели значення.');
    break;
  } else {
    break;
  }
}
