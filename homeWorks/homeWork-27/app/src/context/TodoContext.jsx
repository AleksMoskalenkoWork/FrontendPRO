import { createContext, useContext, useReducer } from 'react';

const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
let nextId = initialTasks.length
  ? +initialTasks[initialTasks.length - 1].id + 1
  : 1;

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return localStorage.setItem(
        'tasks',
        JSON.stringify([
          ...tasks,
          {
            id: nextId,
            text: action.text,
            done: false,
          },
        ])
      );
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
