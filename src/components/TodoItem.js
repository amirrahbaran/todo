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
    const { todo } = this.props;
    return (
      <li id={todo.id} className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button onClick={this.onDestroy} className="destroy" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
