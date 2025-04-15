const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let charOfArray = array[i];

    if (charOfArray !== item) {
      newArray.push(charOfArray);
    }
  }

  return newArray.length < array.length
    ? alert(`Дякуємо! Ми видалили ${item} з масиву: \n ${newArray}`)
    : alert(
        `Нажаль ми не знайшли такого числа ${item}.\n Масив не змінився ${array}.`
      );
}

removeElement(array, 22);
