import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  TodoStore = this.props.TodoStore;
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.TodoStore.getfilteredTodos().map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
