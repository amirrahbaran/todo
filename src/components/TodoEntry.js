import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoEntry extends Component {
  render() {
    const TodoStore = this.props.TodoStore;

    return (
      <header className="header">
        <h1>todo</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          ref={TodoStore.todoInput}
          onKeyUp={TodoStore.addTodo}
        />
      </header>
    );
  }
}

export default TodoEntry;
