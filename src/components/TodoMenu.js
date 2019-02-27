import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import TodoLeft from "./TodoLeft";

@observer
class TodoMenu extends Component {
  render() {
    if (!todoStore.todoCount && !todoStore.completedCount) return null;
    return (
      <footer className="footer">
        <TodoLeft todoStore={todoStore}/>
      </footer>
    );
  }
}

export default TodoMenu;
