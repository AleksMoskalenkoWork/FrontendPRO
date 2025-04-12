function createTable(rowNum, colNum) {
  const tableHeading = document.createElement('h2');
  tableHeading.textContent = 'Таблиця Піфагора';

  const getBody = document.querySelector('body');
  const createTable = document.createElement('table');
  const tableBody = document.createElement('tbody');

  document.querySelector('#left').appendChild(tableHeading);

  document.querySelector('#left').appendChild(createTable);
  createTable.appendChild(tableBody);

  for (let i = 0; i <= rowNum; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    if (i === 0) {
      cell.textContent = '';
      row.appendChild(cell);
      for (let j = 1; j <= colNum; j++) {
        const cell = document.createElement('td');
        cell.style.backgroundColor = 'lightblue';

        cell.textContent = `${j}`;
        row.appendChild(cell);
      }
    } else {
      cell.style.backgroundColor = 'lightgreen';
      cell.textContent = `${i}`;
      row.appendChild(cell);
      for (let j = 1; j <= colNum; j++) {
        const cell = document.createElement('td');
        if (j === i) {
          cell.style.backgroundColor = 'pink';
          cell.textContent = `${j * i}`;
          row.appendChild(cell);
        } else {
          cell.textContent = `${j * i}`;
          row.appendChild(cell);
        }
      }
    }

    tableBody.appendChild(row);
  }
}

createTable(10, 10);
