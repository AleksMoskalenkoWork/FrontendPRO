import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import TodoPage from '../pages/TodoPage';
import store from '../features/store';

describe('TodoPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );
  });

  it('page containse heading ToDoList', () => {
    const headingEl = screen.getByRole('heading');
    expect(headingEl.innerHTML).equal('ToDoList');
  });

  it('in field may type numbers and letters', () => {
    const inputEl = screen.getByRole('textbox');
    fireEvent.change(inputEl, { target: { value: 'QA task 123' } });
    expect(inputEl.value).equal('QA task 123');
  });

  it('affter click button "Add" with empty filed show error', () => {
    const buttonEl = screen.getByText('Add');
    fireEvent.click(buttonEl);

    const errorEl = screen.getByRole('alert');
    expect(errorEl.innerHTML).equal('Field is empty. Please, enter task name.');
  });

  it('when list is empty, empty state must exist in DOM', () => {
    const emptyStateEl = screen.getByText(
      'List is empty. Add your first task.'
    );

    expect(emptyStateEl).toBeInTheDocument();
    expect(emptyStateEl.innerHTML).equal('List is empty. Add your first task.');
  });

  it('after add task find in list', () => {
    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByText('Add');

    fireEvent.change(inputEl, { target: { value: 'Test task QA' } });
    fireEvent.click(buttonEl);

    const listItemEl = screen.getByRole('listitem');

    expect(listItemEl).toBeInTheDocument();
    expect(listItemEl.textContent).contain('Test task QA');
  });

  it('mark task as complete', () => {
    const listItemEl = screen.getByRole('listitem');

    expect(listItemEl).toBeInTheDocument();
    expect(listItemEl.textContent).contain('Test task QA');

    const checkboxEl = screen.getByRole('checkbox');
    fireEvent.click(checkboxEl);

    expect(checkboxEl).toBeChecked();
  });

  it('clear list', () => {
    const clearButtonEl = screen.getByText('Clear task list');

    expect(clearButtonEl).toBeInTheDocument();
    expect(clearButtonEl.innerHTML).equal('Clear task list');

    fireEvent.click(clearButtonEl);

    const emptyStateEl = screen.getByText(
      'List is empty. Add your first task.'
    );

    expect(emptyStateEl).toBeInTheDocument();
    expect(emptyStateEl.innerHTML).equal('List is empty. Add your first task.');
  });
});
