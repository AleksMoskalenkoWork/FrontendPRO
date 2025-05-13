let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
  const id = tasks.length ? +tasks[tasks.length - 1].id + 1 : 1;
  const isMarked = false;
  const taskName = document.querySelector('input.js--form__input').value;

  if (!taskName) {
  } else {
    tasks.push({ id, taskName, isMarked });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTaskList();
  }
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTaskList();
  }
}

function markTask(id) {
  const li = document.querySelector(`li[data-id="${id}"]`);
  const checkbox = document.querySelector(
    `input[type="checkbox"][data-id="${id}"]`
  );

  const task = tasks.find((task) => task.id === id);

  task.isMarked = checkbox.checked;

  if (task.isMarked) {
    li.classList.add('todo-item--checked');
  } else {
    li.classList.remove('todo-item--checked');
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showTaskList() {
  const list = document.querySelector('.js--todos-wrapper');
  if (!tasks.length) {
    list.innerHTML = `
        <span class='empty-state'>List is empty. Add your first task.</span>
        `;
  } else {
    list.innerHTML = '';
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.setAttribute('data-id', `${task.id}`);
      li.innerHTML = `
        <input type="checkbox" data-id="${task.id}" onclick="markTask(${
        task.id
      })" ${task.isMarked ? 'checked' : ''}  />
        <span class="todo-item__description">${task.taskName}</span>
        <button class="todo-item__delete" onclick="deleteTask(${task.id})">
            Видалити
        </button>
    `;

      if (task.isMarked) {
        li.classList.add('todo-item--checked');
      }

      list.appendChild(li);
    });
  }
}

showTaskList();
