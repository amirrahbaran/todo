import React, { Component } from "react";

let pluralize = require("pluralize");

class TodoLeft extends Component {
  render() {
    const { todoStore } = this.props;
    const todoCountComplement = pluralize("item", todoStore.todoCount);
    return (
      <span className="todo-count">
        <strong>{todoStore.todoCount}</strong> {todoCountComplement} left
      </span>
    );
  }
}

export default TodoLeft;
