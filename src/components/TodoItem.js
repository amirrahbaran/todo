import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoItem extends Component {
  render() {
    const todo = this.props.todo;
    const TodoStore = this.props.TodoStore;

    return (
      <li key={todo.id} className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={event => TodoStore.checkTodo(todo, event)}
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button
            className="destroy"
            onClick={event => TodoStore.deleteTodo(todo.id)}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
