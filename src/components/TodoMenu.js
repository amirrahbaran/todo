import React, { Component } from "react";
import {observer} from 'mobx-react';
import todoStore from "../stores/TodoStore";
let pluralize = require('pluralize')

@observer
class TodoMenu extends Component {
  render() {
    if (!todoStore.undoneTodoCount && !todoStore.completedCount) return null;

    const undoneTodoText = pluralize("item", todoStore.undoneTodoCount);

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoStore.undoneTodoCount}</strong> {undoneTodoText} left
        </span>
        
      </footer>
    );
  }
}

export default TodoMenu;
