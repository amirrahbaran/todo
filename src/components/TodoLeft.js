import React, { Component } from "react";

let pluralize = require("pluralize");

class TodoLeft extends Component {
  render() {
    const { TodoStore } = this.props;
    const todoCountComplement = pluralize("item", TodoStore.todoCount);
    return (
      <span className="todo-count">
        <strong>{TodoStore.todoCount}</strong> {todoCountComplement} left
      </span>
    );
  }
}

export default TodoLeft;
