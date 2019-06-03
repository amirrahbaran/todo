import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoLeft from "./TodoLeft";
import TodoFilter from "./TodoFilter";

@observer
class TodoMenu extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    if (!TodoStore.todoCount && !TodoStore.completedCount) return null;
    return (
      <footer className="footer">
        <TodoLeft TodoStore={TodoStore} />
        <TodoFilter TodoStore={TodoStore} />
      </footer>
    );
  }
}

export default TodoMenu;
