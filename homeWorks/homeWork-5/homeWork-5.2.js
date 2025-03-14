let startConditionValue = 10;
let endConditionValue = 100;
let intervalValue = 10;
let exchangeRate = 26;
let result;

for (let i = startConditionValue; i <= endConditionValue; i += intervalValue) {
  result = i * exchangeRate;
  console.log(result);
}
