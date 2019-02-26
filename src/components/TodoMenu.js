import React, { Component } from "react";
import {observer} from 'mobx-react';
import todoStore from "../stores/TodoStore";

@observer
class TodoMenu extends Component {
  render() {
    if (!todoStore.activeTodoCount && !todoStore.completedCount) return null;

    const activeTodoWord = (todoStore.activeTodoCount, "item");

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoStore.activeTodoCount}</strong> {activeTodoWord} left
        </span>
        
      </footer>
    );
  }
}

export default TodoMenu;
