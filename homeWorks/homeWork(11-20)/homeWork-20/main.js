import * as bootstrap from 'bootstrap';
import './styles.scss';
import $ from 'jquery';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
  const id = tasks.length ? +tasks[tasks.length - 1].id + 1 : 1;
  const isMarked = false;
  const taskName = $('input.js--form__input').val();

  if (taskName) {
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
  const liEl = $(`li[data-id="${id}"]`);
  const checkboxEl = $(`input[type="checkbox"][data-id="${id}"]`);

  const task = tasks.find((task) => task.id === id);

  task.isMarked = checkboxEl.is(':checked');

  if (task.isMarked) {
    liEl.addClass('todo-item--checked');
  } else {
    liEl.removeClass('todo-item--checked');
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createInfoModal(taskName, id) {
  $('#taskInfoModal').remove();
  const modalEl = $('<div></div>');

  modalEl.html(`
      <div class="modal fade" id="taskInfoModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Task №${id}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>This task description ${taskName}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`);

  $('body').append(modalEl);
  const modal = new bootstrap.Modal($('#taskInfoModal'));
  modal.show();
}

function showTaskList() {
  $('.form__btn').on('click', addTask);
  const listEl = $('.js--todos-wrapper');

  if (!tasks.length) {
    listEl.html(`
        <span class='empty-state'>List is empty. Add your first task.</span>
        `);
  } else {
    listEl.html('');
    tasks.forEach((task) => {
      const liEl = $('<li></li>');
      liEl.addClass('todo-item');
      liEl.attr('data-id', `${task.id}`);
      liEl.on('click', (event) => {
        const target = $(event.target);

        if (target.is('input[type="checkbox"]') || target.is('button')) {
          return;
        }
        createInfoModal(task.taskName, task.id);
      });

      liEl.html(`
          <input type="checkbox" class="todo-item__checkbox" ${
            task.isMarked ? 'checked' : ''
          } data-id="${task.id}" />
          <span class="todo-item__description">${task.taskName}</span>
          <button class="todo-item__delete">
              Видалити
          </button>
      `);

      liEl.find('.todo-item__delete').on('click', () => {
        deleteTask(task.id);
      });

      liEl.find('.todo-item__checkbox').on('click', () => {
        markTask(task.id);
      });

      if (task.isMarked) {
        liEl.addClass('todo-item--checked');
      }

      listEl.append(liEl);
    });
  }
}

showTaskList();
