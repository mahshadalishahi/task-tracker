import { State, Task } from "./types";

const randomId: () => number = () => Date.now() * Math.random();
const findIndex: (tasks: Task[], id: number) => number = (tasks, id) => tasks.findIndex(task => {
  return task.id === id;
});

export const defaultState: State = {
  tasks: []
};

export function state_reducer(state: State, action: any) {
  switch (action.type) {
    case "create":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            title: action.value.title,
            status: action.value.status,
            id: randomId()
          }
        ],
      };
    case "delete":
      const tasks = [...state.tasks]
      tasks.splice(findIndex(tasks, action.value), 1);
      return {
        ...state,
        tasks: [...tasks]
      }

    case "change-status":
      state.tasks[findIndex(state.tasks, action.value.id)].status = action.value.status
      return {
        ...state,
        tasks: [...state.tasks]
      }
    case "change-title":
      state.tasks[findIndex(state.tasks, action.value.id)].title = action.value.title
      return {
        ...state,
        tasks: [...state.tasks]
      }
    default:
      return state
  }
}