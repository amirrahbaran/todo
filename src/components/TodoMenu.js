import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TodoLeft from "./TodoLeft";
import TodoFilter from "./TodoFilter";

@inject("TodoStore")
@observer
class TodoMenu extends Component {
  render() {
    const TodoStore = this.props.TodoStore;
    if (!TodoStore.totalNumberOfTodos && !TodoStore.totalNumberOfCompletedTodos) return null;
    return (
      <footer className="footer">
        <TodoLeft TodoStore={TodoStore} />
        <TodoFilter TodoStore={TodoStore} />
      </footer>
    );
  }
}

export default TodoMenu;
