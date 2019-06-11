import React, { Component } from "react";
import { inject, observer } from "mobx-react";

let pluralize = require("pluralize");

@inject("TodoStore")
@observer
class TodoLeft extends Component {
  render() {
    const { TodoStore } = this.props;
    const todoCountComplement = pluralize("item", TodoStore.remaining);
    return (
      <span className="todo-count">
        <strong>{TodoStore.remaining}</strong> {todoCountComplement} left
      </span>
    );
  }
}

export default TodoLeft;
