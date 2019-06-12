import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  onDestroy = () => {
    this.props.todo.destroy();
  };

  render() {
    const todo = this.props.todo;

    return (
      <li key={todo.id} className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={this.onToggle}
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button
            className="destroy"
            onClick={this.onDestroy}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
