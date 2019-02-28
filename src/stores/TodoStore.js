import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";
import { FilteringTypes } from "../lib/Filter";

class TodoStore {
  @observable todos = [];
  @observable todoFilter = FilteringTypes.DISPLAY_ALL.name;

  lastId = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  }

  getTodosByFilter() {
    return this.todos.filter(todo => {
      switch (this.todoFilter) {
        case FilteringTypes.DISPLAY_LEFT:
          return !todo.completed;
        case FilteringTypes.DISPLAY_DONE:
          return todo.completed;
        default:
          return true;
      }
    });
  }

  @computed get todoCount() {
    return this.todos.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0);
  }

  @computed get doneCount() {
    return this.todos.length - this.todoCount;
  }
}

const store = new TodoStore();
export default store;
