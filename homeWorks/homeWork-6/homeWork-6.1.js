const getUserString = prompt('Введіть текст для форматування:');
const getSymbolsForDelete = prompt('Введіть символи для видалення з тексту:');

function deleteSymbolsFromText(string, symbols) {
  let result = '';

  const formatString = string.trim().toLowerCase();
  const formatSymbols = symbols.trim().toLowerCase();

  for (let i = 0; i < formatString.length; i++) {
    let charFromString = formatString[i];

    if (!formatSymbols.includes(charFromString)) {
      result += charFromString;
    }
  }

  return alert(`Ваш текст відформатовано: \n${result}`);
}

deleteSymbolsFromText(getUserString, getSymbolsForDelete);
