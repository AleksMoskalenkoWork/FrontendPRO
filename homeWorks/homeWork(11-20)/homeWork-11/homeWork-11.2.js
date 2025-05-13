const button = document.createElement('button');
button.textContent = 'Змінити колір заголовка таблиці';
document.querySelector('#left').appendChild(button);

button.addEventListener('click', (event) => {
  const headingTable = document.querySelector('h2');
  headingTable.classList.toggle('active');
});
