import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";
import { FilteringTypes } from "../lib/Filter";

class TodoStore {
  lastId = 0;

  @observable
  todos = [];

  @observable
  filter = FilteringTypes.DISPLAY_ALL.name;

  @action
  addTodo = title => {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  };

  @action
  setFilter = filter => {
    this.filter = filter;
  };

  @computed
  get totalNumberOfTodos() {
    return this.todos.length;
  }

  @computed
  get totalNumberOfCompletedTodos() {
    return this.todos.filter(todo => todo.completed).length;
  }

  @computed
  get filteredListOfTodos() {
    switch (this.filter) {
      case FilteringTypes.DISPLAY_LEFT.name:
        return this.todos.filter(todo => !todo.completed);
      case FilteringTypes.DISPLAY_DONE.name:
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  @computed
  get totalNumberOfLeftoverTodos() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}

const store = new TodoStore();
export default store;
