const getUserName = prompt('Enter your name:');
const getUserSurname = prompt('Enter your surname:');
const getUserLastName = prompt('Enter your last name:');

alert(
  `Expected result: ${
    getUserName + ' ' + getUserSurname + ' ' + getUserLastName
  }`
);
