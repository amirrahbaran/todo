import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoItems extends Component {
  render() {
    const TodoStore = this.props.TodoStore;

    return (
      <section className="main">
        <ul className="todo-list">
          {TodoStore.filteredListOfTodos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
