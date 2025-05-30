import TodoApi from './api/TodoApi.js';
import * as bootstrap from 'bootstrap';
import '../styles.scss';
import $ from 'jquery';

export default class Todo {
  constructor() {
    this.api = new TodoApi();
    this.id;
    this.isMarked;
    this.taskName;
    this.response;
    this.requestBody;
  }

  async addTask() {
    //problem with id

    // this.response = await this.api.get();
    // this.id = this.response.length
    //   ? +this.response[this.response.length - 1].id + 1
    //   : 1;
    this.isMarked = false;
    this.taskName = $('input.js--form__input').val();
    console.log(this.id);

    if (this.taskName) {
      this.requestBody = {
        // id: this.id,
        taskName: this.taskName,
        isMarked: this.isMarked,
      };

      await this.api.post(this.requestBody);
      await this.showTaskList();
    }
  }

  async deleteTask(id) {
    this.requestBody = {
      id: id,
    };

    await this.api.delete(this.requestBody);
    await this.showTaskList();
  }

  async markTask(id) {
    this.response = await this.api.get();

    const liEl = $(`li[data-id="${id}"]`);
    const checkboxEl = $(`input[type="checkbox"][data-id="${id}"]`);

    const task = this.response.find((task) => task.id === id);

    task.isMarked = checkboxEl.is(':checked');

    if (task.isMarked) {
      liEl.addClass('todo-item--checked');
    } else {
      liEl.removeClass('todo-item--checked');
    }

    this.requestBody = {
      id: id,
      taskName: task.taskName,
      isMarked: task.isMarked,
    };

    await this.api.put(this.requestBody);
    await this.showTaskList();
  }

  async createInfoModal(id) {
    this.response = await this.api.getById(id);

    $('#taskInfoModal').remove();
    const modalEl = $('<div></div>');

    modalEl.html(`
        <div class="modal fade" id="taskInfoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Task №${this.response.id}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>This task description ${this.response.taskName}</p>
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

  async showTaskList() {
    this.response = await this.api.get();

    $('.form__btn').on('click', this.addTask.bind(this));
    const listEl = $('.js--todos-wrapper');

    if (!this.response.length) {
      listEl.html(`
          <span class='empty-state'>List is empty. Add your first task.</span>
          `);
    } else {
      listEl.html('');
      this.response.forEach((task) => {
        const liEl = $('<li></li>');
        liEl.addClass('todo-item');
        liEl.attr('data-id', `${task.id}`);
        liEl.on('click', async (event) => {
          const target = $(event.target);

          if (target.is('input[type="checkbox"]') || target.is('button')) {
            return;
          }
          await this.createInfoModal(task.id);
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
          this.deleteTask(task.id);
        });

        liEl.find('.todo-item__checkbox').on('click', () => {
          this.markTask(task.id);
        });

        if (task.isMarked) {
          liEl.addClass('todo-item--checked');
        }

        listEl.append(liEl);
      });
    }
  }
}
