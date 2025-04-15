const orderList = document.querySelector('#orderList');
const input = document.querySelector('input');
const addButton = document.querySelector('#addTask');
const listItem = document.querySelector('li');

input.addEventListener('click', () => {
  input.removeAttribute('placeholder');
});

addButton.addEventListener('click', () => {
  if (!input.value) {
    alert('Please, enter task name.');
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    listItem.setAttribute('id', 'listItem');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id', 'removeTask');

    orderList.appendChild(listItem);
    listItem.appendChild(removeButton);
    input.value = '';
    input.setAttribute('placeholder', 'Type task name');
  }
});

orderList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.closest('li');
    li.remove();
  }
});
