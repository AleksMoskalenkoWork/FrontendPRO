function getUserNumber() {
  const userNumber = prompt('Type three-digit number');

  if (userNumber !== null && userNumber.length === 3 && !isNaN(userNumber)) {
    let a = userNumber[0];
    let b = userNumber[1];
    let c = userNumber[2];

    if (a == b && b == c) {
      alert('Всі цифри однакові!');
    } else if (a === b || b === c || a === c) {
      alert('Серед цифр є цифри однакові');
    } else if (a !== b || b !== c || a !== c) {
      alert('Всі цифри різні!');
    }
  } else {
    alert('You type wrong length number. Please, try again');
  }
}

getUserNumber();
