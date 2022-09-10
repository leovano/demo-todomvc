import create from "zustand";
import produce from "immer";

export interface TodoTask {
  id: string;
  checked: boolean;
  content: string;
  editMode: boolean;
}

interface TodoState {
  tasks: TodoTask[];

  add: (task: TodoTask) => void;
  remove: (id: string) => void;
  mark: (id: string, checked: boolean) => void;
  edit: (id: string, content: string) => void;
  editMode: (id: string, enabled: boolean) => void;
  checkAll: () => void;
  clearDone: () => void;
}

const useTodoStore = create<TodoState>((set) => ({
  tasks: [],

  add: (task) =>
    set(produce((state: TodoState) => void state.tasks.push(task))),

  remove: (id) =>
    set(
      produce((state: TodoState) => {
        state.tasks = state.tasks.filter((task: TodoTask) => task.id !== id);
      })
    ),

  mark: (id, checked) =>
    set(
      produce((state: TodoState) => {
        state.tasks.find((task) => task.id === id)!.checked = checked;
      })
    ),

  edit: (id, content) =>
    set(
      produce((state: TodoState) => {
        state.tasks.find((task) => task.id === id)!.content = content;
      })
    ),

  editMode: (id, enabled) =>
    set(
      produce((state: TodoState) => {
        state.tasks.find((task) => task.id === id)!.editMode = enabled;
      })
    ),

  checkAll: () =>
    set(
      produce((state: TodoState) => {
        state.tasks.forEach((task) => (task.checked = true));
      })
    ),

  clearDone: () =>
    set(
      produce((state: TodoState) => {
        state.tasks = state.tasks.filter((task: TodoTask) => !task.checked);
      })
    ),
}));

export default useTodoStore;
