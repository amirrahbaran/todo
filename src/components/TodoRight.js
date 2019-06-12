import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoLeft extends Component {
  render() {
    const { TodoStore } = this.props;
    if (!TodoStore.totalNumberOfCompletedTodos)
      return null;
    return (
      <span className="clear-completed">
        <a onClick={TodoStore.clearCompleted}>Clear Completed</a>
      </span>
    );
  }
}

export default TodoLeft;
